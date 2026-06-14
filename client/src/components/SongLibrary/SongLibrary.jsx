import { useState } from "react";

import MusicLibraryHeader from "./MusicLibraryHeader";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import SongItem from "./SongItem";

const SongLibrary = ({
  songs,
  currentSong,
  setCurrentSong,
}) => {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] =
    useState("All");

  const genres = [
    "All",
    ...new Set(
      songs
        .map((song) => song.genre)
        .filter(Boolean)
    ),
  ];

  const filteredSongs = songs.filter(
    (song) => {
      const matchesSearch =
        `${song.title} ${song.artist || ""}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesGenre =
        selectedGenre === "All" ||
        song.genre === selectedGenre;

      return (
        matchesSearch &&
        matchesGenre
      );
    }
  );

  return (
    <section className="relative">

      {/* Header */}
      <MusicLibraryHeader
        totalSongs={songs.length}
        totalGenres={genres.length - 1}
      />

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Genre Filter */}
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={
          setSelectedGenre
        }
      />

      {/* Songs Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="app-heading text-2xl">
          All Songs
        </h2>

        <span className="song-artist">
          {filteredSongs.length} Songs
        </span>
      </div>

      {/* Songs Grid */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
        "
      >
        {filteredSongs.map((song) => {
          const originalIndex =
            songs.findIndex(
              (s) => s._id === song._id
            );

          return (
            <SongItem
              key={song._id}
              song={song}
              isActive={
                currentSong ===
                originalIndex
              }
              onClick={() =>
                setCurrentSong(
                  originalIndex
                )
              }
            />
          );
        })}
      </div>

      {filteredSongs.length === 0 && (
        <div className="text-center py-12">
          <h3 className="font-semibold">
            No Songs Found
          </h3>

          <p className="song-artist mt-2">
            Try another search or genre.
          </p>
        </div>
      )}
    </section>
  );
};

export default SongLibrary;