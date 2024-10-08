import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search books by title, category, or metadata..."
          className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>
    </div>
  )
}

export default SearchBar