import { getSongs } from "@/services/songService";
import { useState, useEffect } from "react";
import useAudio from "@/hooks/useAudio";
import MusicCard from "@/components/MusicPlayer/MusicCard";
import { Link } from "react-router-dom";

function HomePage() {
  const [currentSong, setCurrentSong] = useState(0);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await getSongs();

        setSongs(data);

        if (!data.length) {
          console.warn("No songs found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSongs();
  }, []);

  const {
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
  } = useAudio();

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSong(
      (prev) => (prev - 1 + songs.length) % songs.length
    );
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  if (!songs.length) {
    return (
      <div className="app-page flex items-center justify-center min-h-screen">
        Loading Songs...
      </div>
    );
  }

  return (
    <main className="app-page min-h-screen">
      <section className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h1 className="app-heading text-4xl font-bold">
              Music Player
            </h1>

            <p className="song-artist mt-2">
              Stream and manage your tracks
            </p>
          </div>

          <Link
            to="/upload"
            className="
              app-button
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            <span>🎵</span>
            <span>Upload Song</span>
          </Link>
        </div>

        <audio
          ref={audioRef}
          src={songs[currentSong].audioUrl}
          onLoadedMetadata={(e) =>
            setDuration(e.target.duration)
          }
          onTimeUpdate={(e) =>
            setCurrentTime(e.target.currentTime)
          }
          onLoadedData={() => {
            if (isPlaying) {
              audioRef.current?.play();
            }
          }}
          onEnded={nextSong}
        />

        <MusicCard
          song={songs[currentSong]}
          currentTime={currentTime}
          duration={duration}
          audioRef={audioRef}
          volume={volume}
          setVolume={setVolume}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
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