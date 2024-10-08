import React, { useState } from 'react'
import { Book, Search } from 'lucide-react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'

function App() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {selectedBook ? (
            <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
          ) : (
            <BookList onSelectBook={setSelectedBook} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App