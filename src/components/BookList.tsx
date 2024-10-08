import React from 'react'
import { Book } from 'lucide-react'

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Classic', coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, title: '1984', author: 'George Orwell', category: 'Science Fiction', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
]

const BookList = ({ onSelectBook }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.id} className="bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => onSelectBook(book)}>
          <div className="flex items-center justify-center h-48 bg-gray-200 rounded-md mb-4 overflow-hidden">
            {book.coverUrl ? (
              <img src={book.coverUrl} alt={book.title} className="object-cover w-full h-full" />
            ) : (
              <Book size={48} className="text-gray-400" />
            )}
          </div>
          <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-600 mb-2">Author: {book.author}</p>
          <p className="text-gray-600 mb-4">Category: {book.category}</p>
        </div>
      ))}
    </div>
  )
}

export default BookList