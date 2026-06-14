import { useState } from "react";
import { toast } from "react-hot-toast";
import { uploadSong } from "../../services/songuploadService";

const SongUploadForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return toast.error("Song title is required");
    }

    if (!artist.trim()) {
      return toast.error("Artist name is required");
    }

    if (!genre.trim()) {
      return toast.error("Genre is required");
    }

    if (!cover) {
      return toast.error("Please select a cover image");
    }

    if (!audio) {
      return toast.error("Please select an audio file");
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("genre", genre);
    formData.append("cover", cover);
    formData.append("audio", audio);

    const toastId = toast.loading("Uploading song...");

    try {
      await uploadSong(formData);

      toast.success("Song uploaded successfully", {
        id: toastId,
      });

      setTitle("");
      setArtist("");
      setGenre("");
      setCover(null);
      setAudio(null);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error?.message || "Upload failed",
        {
          id: toastId,
        },
      );
    }
  };

  return (
    <div className="app-page flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="music-card w-full max-w-5xl p-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* COVER PREVIEW */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="album-cover w-64 h-64"
              style={{
                boxShadow: "var(--player-shadow)",
              }}
            >
              {cover ? (
                <img
                  src={URL.createObjectURL(cover)}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-7xl"
                  style={{
                    background: "var(--secondary)",
                  }}
                >
                  🎵
                </div>
              )}
            </div>

            <p className="song-artist text-center">
              {cover ? cover.name : "Select an album cover"}
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-5">
            <div>
              <h1 className="app-heading text-4xl font-bold">
                Upload New Track
              </h1>

              <p className="song-artist mt-2">Add music to your collection</p>
            </div>

            <input
              type="text"
              placeholder="Song Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                px-5 py-4
                rounded-[var(--radius)]
                border
                outline-none
              "
              style={{
                background: "var(--secondary)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
              }}
            />

            <input
              type="text"
              placeholder="Artist Name"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="
                w-full
                px-5 py-4
                rounded-[var(--radius)]
                border
                outline-none
              "
              style={{
                background: "var(--secondary)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
              }}
            />

            <input
              type="text"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="
                w-full
                px-5 py-4
                rounded-[var(--radius)]
                border
                outline-none
              "
              style={{
                background: "var(--secondary)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
              }}
            />

            {/* COVER UPLOAD */}
            <label
              className="
                music-card
                block
                p-5
                cursor-pointer
                text-center
                hover:scale-[1.01]
                transition
              "
            >
              <div className="text-lg font-semibold">🖼 Upload Cover Image</div>

              <div className="song-artist mt-2">
                {cover ? cover.name : "Choose image"}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCover(e.target.files[0])}
                className="hidden"
              />
            </label>

            {/* AUDIO UPLOAD */}
            <label
              className="
                music-card
                block
                p-5
                cursor-pointer
                text-center
                hover:scale-[1.01]
                transition
              "
            >
              <div className="text-lg font-semibold">🎧 Upload Audio Track</div>

              <div className="song-artist mt-2">
                {audio ? audio.name : "Choose audio"}
              </div>

              <input
                type="file"
                accept="audio/*"
                onChange={(e) => setAudio(e.target.files[0])}
                className="hidden"
              />
            </label>

            <button
              type="submit"
              className="
                app-button
                w-full
                py-4
                text-lg
                font-semibold
                transition
                hover:scale-[1.02]
              "
            >
              Publish Track
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SongUploadForm;
