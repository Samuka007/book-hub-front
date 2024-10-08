import React from 'react'
import { Book, User, Search } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Book size={24} />
          <h1 className="text-2xl font-bold">BookHub</h1>
        </div>
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full p-2 pl-10 pr-4 rounded-lg text-gray-900"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded">
            Login / SSO
          </button>
          <User size={24} />
        </div>
      </div>
    </header>
  )
}

export default Header