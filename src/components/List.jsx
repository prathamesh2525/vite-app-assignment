import { AiOutlineDelete } from "react-icons/ai"
import React, { useState } from "react"
import Dropdown from "./Dropdown"
import { filters } from "../data"
function FilterInput() {
  const [selectedOption1, setSelectedOption1] = useState(null)
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)

  const filter1 = filters.map((f) => f.filter)
  const [filter2, setFilter2] = useState([])
  const [filter3, setFilter3] = useState([])

  const handleSelect1Internal = (option) => {
    setSelectedOption1(option)
    setDropdown1(!dropdown1)
    setFilter2(filters.find((f) => f.filter === option).is[0]?.filters2)
  }

  const handleSelect2Internal = () => {
    setDropdown1(!dropdown1)
    setFilter3(filters.find((f) => f.filter === selectedOption1).is[0]?.filter3)
  }

  const handleSelect3Internal = (option) => {
    setDropdown3(!dropdown3)
  }

  return (
    <div className=" mt-2 ">
      <Component
        filter1={filter1}
        filter2={filter2}
        filter3={filter3}
        handleSelect1Internal={handleSelect1Internal}
        handleSelect2Internal={handleSelect2Internal}
        handleSelect3Internal={handleSelect3Internal}
      />
    </div>
  )
}

export default FilterInput

export const Component = ({
  filter1,
  filter2,
  filter3,
  handleSelect1Internal,
  handleSelect2Internal,
  handleSelect3Internal,
}) => {
  return (
    <div className="flex justify-start items-center">
      <p className="text-lg mr-2">Where</p>

      <Dropdown options={filter1} onSelect={handleSelect1Internal} />
      {selectedOption1 && (
        <>
          <Dropdown options={filter2} onSelect={handleSelect2Internal} />
          <Dropdown options={filter3} onSelect={handleSelect3Internal} />
        </>
      )}
      <button>
        <AiOutlineDelete className="absolute right-5 text-xl text-slate-500 hover:text-slate-800 hover:rounded-full " />
      </button>
    </div>
  )
}
