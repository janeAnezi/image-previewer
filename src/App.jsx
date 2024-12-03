import { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {images} from "./constants/index"

function App() {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <main className="h-screen relative pt-28">
      <button className=" absolute right-64 top-10 text-yellow-600 hover:text-teal-500"><FaRegPlayCircle /></button>
      
      <div className="flex justify-center items-center ">
        <button className="text-yellow-600 hover:text-teal-500 pr-4" >
          <FaArrowLeft />
        </button>
        <div className="w-80 ">
          <img src={selectedImage} alt="food" className="w-full rounded-md" />
        </div>
        <button className="text-yellow-600  hover:text-teal-500 pl-4">
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-6 ml-8">
        {images.map((image,index) => (
          <button>
            <img 
              src={image} 
              alt={`image ${index + 1}`}
              className="w-32 h-20 object-cover hover:scale-125 transition duration-700 ease-in-out rounded-md"
            />
          </button>
        ))}
      </div>
        
    </main>
  )
}

export default App
