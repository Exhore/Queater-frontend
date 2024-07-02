'use client'
import Button from '@/components/atoms/button/button'
import Location from '@/components/atoms/svg/location'
import NumberIcon from '@/components/atoms/svg/number_icon'
import Price from '@/components/atoms/svg/price'
import TypeIcon from '@/components/atoms/svg/type_icon'
import { useState } from 'react'

const SearchBar = () => {
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [reference, setReference] = useState('')

  const handleSearch = () => {
    // Lógica de búsqueda
  }

  return (
    <div className="mx-auto flex w-full items-center justify-between gap-[492px] rounded-full border p-2 shadow-sm">
      <div className="flex">
        <div className="flex items-center">
          <Location />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>
        <div className="h-8 border-l"></div>
        <div className="flex items-center">
          <TypeIcon />
          <input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>
        <div className="h-8 border-l"></div>
        <div className="flex items-center">
          <Price />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>
        <div className="h-8 border-l"></div>
        <div className="flex items-center">
          <NumberIcon />
          <input
            type="text"
            placeholder="Referencia"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="flex">
        <Button text="Search" onClick={handleSearch} />
      </div>
    </div>
  )
}

export default SearchBar
