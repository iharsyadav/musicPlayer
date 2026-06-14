const SongItem = ({
  song,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        glass
        rounded-2xl
        p-4
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]

        ${
          isActive
            ? "ring-2 ring-[var(--primary)]"
            : ""
        }
      `}
    >
      <div className="flex flex-col items-center text-center">

        <div className="w-16 h-16 rounded-2xl overflow-hidden mb-3">

          {song.coverUrl ? (
            <img
              src={song.coverUrl}
              alt={song.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="
                w-full
                h-full
                bg-[var(--primary)]
                flex
                items-center
                justify-center
                text-white
              "
            >
              🎵
            </div>
          )}

        </div>

        <h3 className="font-semibold line-clamp-1">
          {song.title}
        </h3>

        <p className="song-artist text-sm line-clamp-1">
          {song.artist}
        </p>

      </div>
    </div>
  );
};

export default SongItem;