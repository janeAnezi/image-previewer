export default function ImageStack({ images, currentIndex, setCurrentIndex, setSlideDirection }) {
    return (
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
    );
  };
  
   
  