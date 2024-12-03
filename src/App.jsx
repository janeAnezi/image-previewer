import { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { images } from "./constants/index";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideDirection, setSlideDirection] = useState(""); 
  const prevIndex = useRef(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setSlideDirection("right");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setSlideDirection("left");
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  const toggleSlideshow = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setSlideDirection("right");
        setCurrentIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
        );
      }, 2000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isPlaying]);

  useEffect(() => {
    prevIndex.current = currentIndex;
  }, [currentIndex]);

  const selectedImage = images[currentIndex];

  return (
    <main className="h-screen relative pt-28">
      <button
        onClick={toggleSlideshow}
        className={`absolute right-64 top-10 text-yellow-600 hover:text-teal-500 ${
          isPlaying ? "animate-pulse" : ""
        }`}
      >
        <FaRegPlayCircle />
      </button>

      <div className="flex justify-center items-center overflow-hidden">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="text-yellow-600 hover:text-teal-500 pr-4"
          >
            <FaArrowLeft />
          </button>
        )}
        <div className="relative w-80 h-80 rounded-md overflow-hidden">
          <div
            className={`absolute w-full h-full rounded-md transition-transform duration-700 ${
              slideDirection === "right" ? "translate-x-0 slide-in-right" : ""
            } ${
              slideDirection === "left" ? "translate-x-0 slide-in-left" : ""
            }`}
          >
            <img
              src={selectedImage}
              alt="food"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        {currentIndex < images.length - 1 && (
          <button
            onClick={handleNext}
            className="text-yellow-600 hover:text-teal-500 pl-4"
          >
            <FaArrowRight />
          </button>
        )}
      </div>

      <div className="mt-6 ml-8 flex">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-20 h-20 flex-shrink-0 border-2 ${
              currentIndex === index ? "border-blue-500" : "border-gray-300"
            } rounded-lg overflow-hidden focus:outline-none`}
            onClick={() => {
              setSlideDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
          >
            <img
              src={image}
              alt={`image ${index + 1}`}
              className="w-32 h-20 object-cover hover:scale-125 transition duration-700 ease-in-out rounded-md"
            />
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
