import React from 'react'
import { ArrowLeft, Download, Eye, Edit } from 'lucide-react'

const BookDetails = ({ book, onClose }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button onClick={onClose} className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft size={20} className="mr-2" />
        Back to Gallery
      </button>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src={book.coverUrl} alt={book.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <p className="text-lg mb-4">Category: {book.category}</p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              <Download size={20} />
              <span>Download</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              <Eye size={20} />
              <span>Read Online</span>
            </button>
            <button className="flex items-center space-x-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
              <Edit size={20} />
              <span>Manage</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails