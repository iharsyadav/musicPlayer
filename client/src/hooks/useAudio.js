import { useRef, useState } from "react";

export default function useAudio() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const [isMuted, setIsMuted] = useState(false);

  const play = async () => {
    try {
      await audioRef.current?.play();
      setIsPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  return {
    audioRef,

    isPlaying,
    setIsPlaying,

    currentTime,
    setCurrentTime,

    duration,
    setDuration,

    volume,
    setVolume,

    isMuted,
    setIsMuted,

    togglePlay,
  };
}
