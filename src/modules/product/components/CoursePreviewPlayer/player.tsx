import YouTube from 'react-youtube';
import { YouTubePlayer } from 'youtube-player/dist/types';

import Box from '@components/Box';

import { PreviewProviders } from '@models/Product';

export interface Props {
  preview?: string;
  preview_provider?: PreviewProviders;
  children?: React.ReactNode;
  playVideo: () => void;
  pauseVideo: () => void;
  onReady?(event: { target: YouTubePlayer }): void;
}

export default function Player({
  preview,
  preview_provider,
  children,
  playVideo,
  pauseVideo,
  onReady,
}: Props) {
  if (preview_provider === PreviewProviders.YOUTUBE) {
    return (
      <Box
        width="100%"
        maxWidth={480}
        minHeight={{ default: 190, sm: 270 }}
        borderRadius={3}
        position="relative"
      >
        <YouTube
          opts={{
            width: '100%',
            playerVars: {
              rel: 0,
              controls: 0,
              showinfo: 0,
              fs: 0,
              iv_load_policy: 3,
            },
          }}
          videoId={preview}
          onPause={pauseVideo}
          onPlay={playVideo}
          onReady={onReady}
        />
        {children}
      </Box>
    );
  }

  return null;
}
