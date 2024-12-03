import { useState, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { images } from "./constants/index";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectedImage = images[currentIndex];
  const toggleSlideshow = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); 
  }, [isPlaying]);


  return (
    <main className="h-screen relative pt-28">
      <button 
        onClick={toggleSlideshow} 
        className={`absolute right-64 top-10 text-yellow-600 hover:text-teal-500 ${
          isPlaying ? "animate-pulse text-teal-500" : ""
        }`}
      >
        <FaRegPlayCircle />
      </button>

      <div className="flex justify-center items-center">
        <button onClick={handlePrev} className="text-yellow-600 hover:text-teal-500 pr-4">
          <FaArrowLeft />
        </button>
        <div className="w-80 h-80 rounded-md overflow-hidden">
          <img
            src={selectedImage}
            alt="food"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <button
          onClick={handleNext}
          className="text-yellow-600 hover:text-teal-500 pl-4"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-6 ml-8 flex">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-20 h-20 flex-shrink-0 border-2 ${
              currentIndex === index ? "border-blue-500" : "border-gray-300"
            } rounded-lg overflow-hidden focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
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
