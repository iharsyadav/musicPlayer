const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="glass rounded-3xl p-2 mb-8">
      <div className="flex items-center gap-3">
        <div className="text-2xl px-3">
          🔎
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search songs, artists..."
          className="
            bg-transparent
            flex-1
            py-3
            outline-none
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;