export default function ProgressBar({
  duration,
}) {
  return (
    <div className="mt-4">
      <div className="flex justify-between text-xs opacity-60">
        <span>00:00</span>
        <span>{duration}</span>
      </div>

      <div className="progress-track mt-2">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}