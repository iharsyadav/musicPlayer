import { useRef, useState } from "react";

export default function useAudio() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  return {
    audioRef,
    isPlaying,
    togglePlay,
    setIsPlaying,
  };
}