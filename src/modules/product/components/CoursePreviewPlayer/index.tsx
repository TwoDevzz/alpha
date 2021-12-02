import Box from '@components/Box';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { PreviewProviders } from '@models/Product';

import Player from '@product/components/CoursePreviewPlayer/player';
import Thumbnail from '@product/components/CoursePreviewPlayer/thumbnail';
import { usePlayer } from '@product/hooks/usePlayer';

export interface PlayerOverLayerProps {
  playVideo: () => void;
}

const PlayerOverLayer = ({ playVideo }: PlayerOverLayerProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      position="absolute"
      top={0}
      left={0}
      borderRadius={3}
      backgroundColor="rgba(0, 0, 0, 0.3)"
      zIndex={12}
      onClick={playVideo}
    >
      <Box marginBottom="5">
        <Icon fill="neutral.white" size="h2" name="Play" />
      </Box>
      <Typography color="neutral.white" fontSize="xs">
        Assistir prévia do curso
      </Typography>
    </Box>
  );
};

export interface Props {
  preview?: string;
  preview_provider?: PreviewProviders;
  thumbnail?: string;
}

export default function PreviewPlayer({
  thumbnail,
  preview,
  preview_provider,
}: Props) {
  const {
    show,
    loading,
    playVideo,
    setLoading,
    pauseVideo,
    showOverlay,
    hideOverlay,
    setYoutubePlayer,
  } = usePlayer();

  if (preview && preview_provider) {
    const showLayer = !loading && show;

    return (
      <Player
        preview={preview}
        preview_provider={preview_provider}
        playVideo={() => {
          hideOverlay();
          playVideo();
        }}
        pauseVideo={() => {
          showOverlay();
          pauseVideo();
        }}
        onReady={({ target }) => {
          setYoutubePlayer(target);
          setLoading(false);
          showOverlay();
        }}
      >
        {/*{loading && <Loader color="neutral.white" />}*/}
        {showLayer && (
          <PlayerOverLayer
            playVideo={() => {
              hideOverlay();
              playVideo();
            }}
          />
        )}
      </Player>
    );
  }

  return <Thumbnail thumbnail={thumbnail || ''} />;
}
