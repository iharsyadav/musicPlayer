export default function AlbumCover({ cover, title }) {
  return (
    <div className="absolute -top-10 -left-10 z-10 album-cover">
      <img
        src={cover}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}