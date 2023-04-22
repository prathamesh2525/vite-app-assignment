import "./App.css"
import { RxCross1 } from "react-icons/rx"
import { AiOutlineDelete } from "react-icons/ai"
import { filters } from "./data"
import { useState } from "react"
import Dropdown from "./components/Dropdown"
import FilterInput from "./components/List"

function App() {
  const [selectedOption1, setSelectedOption1] = useState(null)
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)

  const filter1 = filters.map((f) => f.filter)
  const [filter2, setFilter2] = useState([])
  const [filter3, setFilter3] = useState([])

  const handleSelect1 = (option) => {
    setSelectedOption1(option)
    setDropdown1(!dropdown1)
    setFilter2(filters.find((f) => f.filter === option).is[0]?.filters2)
  }

  const handleSelect2 = () => {
    setDropdown1(!dropdown1)
    setFilter3(filters.find((f) => f.filter === selectedOption1).is[0]?.filter3)
  }
  const handleSelect3 = (option) => {
    setDropdown3(!dropdown3)
  }
  return (
    <div className="h-screen flex bg-slate-100 justify-center items-start">
      <div className="h-auto w-[800px] p-4 shadow-[0px_0px_20px_5px_#00000024] shadow-gray-300 rounded-xl mt-20 mx-4 relative">
        <button className="absolute top-3 right-3 text-slate-500 ">
          <RxCross1 size={16} />
        </button>
        <h1 className="text-2xl font-semibold">Filters</h1>
        <div className=" mt-2 ">
          <div className="flex justify-start items-center">
            <p className="text-lg mr-2">Where</p>

            <Dropdown options={filter1} onSelect={handleSelect1} />
            {selectedOption1 && (
              <>
                <Dropdown options={filter2} onSelect={handleSelect2} />
                <Dropdown options={filter3} onSelect={handleSelect3} />
              </>
            )}
            <button>
              <AiOutlineDelete className="absolute right-5 text-xl text-slate-500 hover:text-slate-800 hover:rounded-full " />
            </button>
          </div>
        </div>
        <button className="text-xs px-2 mt-2 py-1 bg-slate-300 rounded-full">
          Add filter
        </button>
      </div>
    </div>
  )
}

export default App
