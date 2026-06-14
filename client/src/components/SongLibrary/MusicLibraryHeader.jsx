const MusicLibraryHeader = ({
  totalSongs,
  totalGenres = 0,
}) => {
  return (
    <div className="glass rounded-3xl p-5 mb-5">
      <div className="flex items-center justify-between">

        <div>
          <p className="uppercase tracking-[0.25em] text-[10px] opacity-60">
            Your Collection
          </p>

          <h1 className="app-heading text-3xl font-bold mt-1">
            Music Library
          </h1>

          <p className="song-artist mt-1">
            Browse your music collection
          </p>
        </div>

        <div className="flex gap-2">
          <div className="glass rounded-xl px-4 py-2">
            <p className="text-xs opacity-60">
              Songs
            </p>

            <h3 className="font-bold">
              {totalSongs}
            </h3>
          </div>

          <div className="glass rounded-xl px-4 py-2">
            <p className="text-xs opacity-60">
              Genres
            </p>

            <h3 className="font-bold">
              {totalGenres}
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MusicLibraryHeader;