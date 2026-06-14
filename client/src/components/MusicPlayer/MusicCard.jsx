import AlbumCover from "./AlbumCover";
import Controls from "./Controls";
import SongInfo from "./SongInfo";
import ProgressBar from "./ProgressBar";

export default function MusicCard({
  song,
  currentTime,
  duration,
  audioRef,
  isPlaying,
  togglePlay,
  nextSong,
  prevSong,
}) {
  return (
    <div className="relative w-[300px]">
      <AlbumCover
        cover={song.coverUrl}
        title={song.title}
      />

      <div
        className="
          music-card
          glass
          w-full
          pl-[120px]
          pr-5
          py-5
          min-h-[260px]
          flex
          flex-col
        "
      >
        <Controls
          nextSong={nextSong}
          prevSong={prevSong}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
        />

        <div className="mt-auto">
          <SongInfo
            title={song.title}
            artist={song.artist}
          />

          <div className="mt-4">
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              audioRef={audioRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}