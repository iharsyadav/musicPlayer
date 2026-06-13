import { useState } from "react";
import useAudio from "@/hooks/useAudio";
import MusicCard from "@/components/MusicPlayer/MusicCard";
import { songs } from "@/data/songs";

function HomePage() {
  const [currentSong, setCurrentSong] = useState(0);

  const {
    audioRef,
    isPlaying,
    togglePlay,
    setIsPlaying,
  } = useAudio();

  const nextSong = () => {
    setCurrentSong(
      (prev) => (prev + 1) % songs.length
    );
  };

  const prevSong = () => {
    setCurrentSong(
      (prev) =>
        (prev - 1 + songs.length) % songs.length
    );
  };

  return (
    <main className="app-page min-h-screen">
      <section className="container mx-auto px-6 py-20">

        <audio
          ref={audioRef}
          src={songs[currentSong].audioUrl}
          onLoadedData={() => {
            if (isPlaying) {
              audioRef.current?.play();
            }
          }}
          onEnded={nextSong}
        />

        <MusicCard
          song={songs[currentSong]}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          nextSong={nextSong}
          prevSong={prevSong}
        />

      </section>
    </main>
  );
}

export default HomePage;