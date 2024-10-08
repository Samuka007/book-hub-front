import React from 'react'
import { Book, Upload, Settings } from 'lucide-react'

const categories = [
  'All Books',
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Mystery',
  'Biography',
  'History',
  'Self-Help',
  'Business',
  'Technology',
]

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <h2 className="font-semibold text-lg mb-2">Categories</h2>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <Book size={16} />
                <span>{category}</span>
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Upload size={20} />
              <span>Contribute</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Settings size={20} />
              <span>Manage Books</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar