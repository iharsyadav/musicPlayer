import {
  FaHeart,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaPlay,
  FaPause,
} from "react-icons/fa";

export default function Controls({
  nextSong,
  prevSong,
  isPlaying,
  togglePlay,
}) {
  return (
    <>
      <div className="flex justify-end gap-4">
        <FaHeart className="player-icon" />
        <FaRandom className="player-icon" />

        <FaStepBackward
          className="player-icon cursor-pointer"
          onClick={prevSong}
        />

        <FaStepForward
          className="player-icon cursor-pointer"
          onClick={nextSong}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </>
  );
}
