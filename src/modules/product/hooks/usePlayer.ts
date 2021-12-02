import { useState } from 'react';
import { YouTubePlayer } from 'youtube-player/dist/types';

export const usePlayer = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [youtubePlayer, setYoutubePlayer] = useState<YouTubePlayer | null>(null);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  const playVideo = () => {
    if (youtubePlayer) {
      youtubePlayer.playVideo();
    }
  };

  const pauseVideo = () => {
    if (youtubePlayer) {
      youtubePlayer.pauseVideo();
    }
  };

  return {
    show,
    loading,
    setLoading,
    showOverlay,
    hideOverlay,
    playVideo,
    pauseVideo,
    setYoutubePlayer,
  };
};
