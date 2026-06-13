export default function SongInfo({
  title,
  artist,
}) {
  return (
    <div>
      <h2 className="song-title">
        {title}
      </h2>

      <p className="song-artist">
        {artist}
      </p>
    </div>
  );
}