import { FaRegPlayCircle } from "react-icons/fa";

export default function AutoPlay ({ isPlaying, toggleSlideshow }) {
  return (
    <button
      onClick={toggleSlideshow}
      className={`absolute right-64 top-10 text-yellow-600 hover:text-teal-500 ${
        isPlaying ? "animate-pulse" : ""
      }`}
    >
      <FaRegPlayCircle />
    </button>
  );
};


