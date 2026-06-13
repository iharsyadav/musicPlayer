import AlbumCover from "./AlbumCover";
import Controls from "./Controls";
import SongInfo from "./SongInfo";
import ProgressBar from "./ProgressBar";

export default function MusicCard({   song,
  nextSong,
  prevSong,
  isPlaying,
  togglePlay, }) {
  return (
    <section className="app-page min-h-screen flex items-center justify-center">
      <div className="relative w-[320px] h-[240px]">
        <AlbumCover cover={song.coverUrl} title={song.title} />

        <div
          className="
            music-card
            glass
            w-full
            h-full
            pl-[120px]
            pr-6
            py-6
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
            <SongInfo title={song.title} artist={song.artist} />

            <div className="mt-4">
              <ProgressBar duration={song.duration} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
