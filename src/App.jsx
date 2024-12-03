import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function App() {
  return (
    <main className="h-screen bg-slate-300 relative pt-28">
      <button className=" absolute right-64 top-10 text-yellow-600 hover:text-teal-500"><FaRegPlayCircle /></button>
      
      <div className="flex justify-center items-center ">
        <div className="w-80 ">
          <img src="assets/food1.jpg" alt="food" className="w-full rounded-md" />
        </div>
      </div>
      <div className="flex justify-between">
        <button className="text-yellow-600 absolute left-48 bottom-48 hover:text-teal-500" >
          <FaArrowLeft />
        </button>

        <button className="text-yellow-600 absolute right-48 bottom-48 hover:text-teal-500">
          <FaArrowRight />
        </button>
      </div>
        
    </main>
  )
}

export default App
