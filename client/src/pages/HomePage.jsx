import { getSongs } from "@/services/songService";
import { useState, useEffect } from "react";
import useAudio from "@/hooks/useAudio";
import MusicCard from "@/components/MusicPlayer/MusicCard";
import { Link } from "react-router-dom";
import SongLibrary from "../components/SongLibrary/SongLibrary";

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
      <div className="app-page min-h-screen flex items-center justify-center">
        Loading Songs...
      </div>
    );
  }

  return (
    <main className="app-page min-h-screen">
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-4">

        {/* =========================
            APP HEADER
        ========================== */}
        <header
          className="
            glass
            rounded-3xl
            p-4
            mb-6
            sticky
            top-4
            z-50
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="app-heading text-2xl md:text-3xl font-bold">
                Music Player
              </h1>

              <p className="song-artist mt-1">
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
                px-4
                py-2
                text-sm
                font-medium
                hover:scale-105
                transition-all
              "
            >
              <span>🎵</span>
              <span>Upload</span>
            </Link>
          </div>
        </header>

        {/* =========================
            AUDIO
        ========================== */}
        <audio
          ref={audioRef}
          src={songs[currentSong]?.audioUrl}
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

        {/* =========================
            MAIN LAYOUT
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[320px_1fr]
            gap-8
            items-start
          "
        >

          {/* =========================
              DESKTOP PLAYER
          ========================== */}
          <aside
   className="
    hidden
    xl:flex
    justify-center
    sticky
    top-[160px]
    self-start
  "
>
  <div className="mt-[120px]">
    <MusicCard
      song={songs[currentSong]}
      currentTime={currentTime}
      duration={duration}
      audioRef={audioRef}
      isPlaying={isPlaying}
      togglePlay={togglePlay}
      nextSong={nextSong}
      prevSong={prevSong}
    />
  </div>
</aside>

          {/* =========================
              MOBILE PLAYER
          ========================== */}
          <div className="xl:hidden flex justify-center mt-12 mb-8">
            <MusicCard
              song={songs[currentSong]}
              currentTime={currentTime}
              duration={duration}
              audioRef={audioRef}
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              nextSong={nextSong}
              prevSong={prevSong}
            />
          </div>

          {/* =========================
              SONG LIBRARY
          ========================== */}
          <SongLibrary
            songs={songs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;