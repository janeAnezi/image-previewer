export default function ImageViewer({ selectedImage, slideDirection }) {
    const slideClass =
      slideDirection === "right"
        ? "slide-in-right"
        : slideDirection === "left"
        ? "slide-in-left"
        : "";
  
    return (
      <div className="relative w-80 h-80 rounded-md overflow-hidden">
        <div
          className={`absolute w-full h-full rounded-md transition-transform duration-700 ${slideClass}`}
        >
          <img
            src={selectedImage}
            alt="selected"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    );
  };
  
  
  