import { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {images} from "./constants/index"

function App() {
  const [selectedImage, setSelectedImage] = useState('assets/food1.jpg')

  return (
    <main className="h-screen bg-slate-300 relative pt-28">
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

      <div className="mt-6">
        {images.map((image, ))}
      </div>
        
    </main>
  )
}

export default App
