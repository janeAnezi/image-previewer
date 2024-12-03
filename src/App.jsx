import { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { images } from "./constants/index";
import AutoPlay from "./Components/AutoPlay";
import ImageViewer from "./Components/ImageViewer";
import ImageStack from "./Components/ImageStack";

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
       <AutoPlay isPlaying={isPlaying} toggleSlideshow={toggleSlideshow} />

      <div className="flex justify-center items-center overflow-hidden">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="text-yellow-600 hover:text-teal-500 pr-4"
          >
            <FaArrowLeft />
          </button>
        )}
        <ImageViewer
          selectedImage={images[currentIndex]}
          slideDirection={slideDirection}
        />
        {currentIndex < images.length - 1 && (
          <button
            onClick={handleNext}
            className="text-yellow-600 hover:text-teal-500 pl-4"
          >
            <FaArrowRight />
          </button>
        )}
      </div>
      <ImageStack
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setSlideDirection={setSlideDirection}
      />
    </main>
  );
}

export default App;
