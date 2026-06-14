const GenreFilter = ({
  genres,
  selectedGenre,
  setSelectedGenre,
}) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-3">
        Browse Genres
      </h3>

      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() =>
              setSelectedGenre(genre)
            }
            className={`
              px-4 py-2
              rounded-full
              transition-all
              duration-300
              text-sm
              ${
                selectedGenre === genre
                  ? `
                    bg-[var(--primary)]
                    text-white
                  `
                  : `
                    glass
                  `
              }
            `}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;