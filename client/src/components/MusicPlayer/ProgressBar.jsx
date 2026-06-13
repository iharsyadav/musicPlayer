function formatTime(time) {
  if (!time) return "00:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

export default function ProgressBar({
  currentTime,
  duration,
  audioRef,
}) {
  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

  const handleSeek = (e) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const clickX =
      e.clientX - rect.left;

    const width = rect.width;

    const seekTime =
      (clickX / width) * duration;

    audioRef.current.currentTime =
      seekTime;
  };

  return (
    <div className="mt-4">

      <div className="flex justify-between text-xs opacity-60">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div
        className="progress-track mt-2 cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

    </div>
  );
}