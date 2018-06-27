import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import MyReadsBookShelves from './MyReadsBookShelves'
import MyReadsSearchPage from './MyReadsSearchPage'

class BooksApp extends React.Component {
  state = {
    currentlyReadingShelf: [],
    wantToReadShelf: [],
    readShelf: [],
    bookIdShelfId: {}
  }

  // Helper Methods
  parseAndUpdateShelves = (books) => {
    let currently = []
    let wantTo = []
    let read = []

    let idToShelf = {}

    for (let book of books) {
      const newBook = {}

      newBook.id= book.id
      newBook.title = book.title
      newBook.authors = book.authors !== undefined ? book.authors : []
      newBook.shelf = book.shelf
      newBook.bookCover = book.imageLinks !== undefined ?
      {
        backgroundImage: book.imageLinks.thumbnail,
        width: 128,
        height: 193
      }
      : {}

      idToShelf[newBook.id] = newBook.shelf

      if (book.shelf === 'currentlyReading') {
        currently.push(newBook)
      } else if (book.shelf === 'wantToRead') {
        wantTo.push(newBook)
      } else if (book.shelf === 'read') {
        read.push(newBook)
      }
    }

    this.setState(() => ({
        currentlyReadingShelf: currently,
        wantToReadShelf: wantTo,
        readShelf: read,
        bookIdShelfId: idToShelf
      }))
  }

  getAllBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.parseAndUpdateShelves(books)
    })
  }

  // State handle methods
  shelfChanged = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((res) => {
      if (res !== undefined) {
        this.getAllBooks()
      }
    })
  }

  // Lifecycle methods
  componentDidMount() {
    this.getAllBooks()
  }

  render() {
    const { currentlyReadingShelf, wantToReadShelf, readShelf, bookIdShelfId } = this.state
    const bookShelves = [
      {
        title: 'Currently Reading',
        books: currentlyReadingShelf
      },
      {
        title: 'Want To Read',
        books: wantToReadShelf
      },
      {
        title: 'Read',
        books: readShelf
      }
    ]

    return (
      <div className="app">
        <Route path='/search' render={() => (
          <MyReadsSearchPage
            booksOnShelves={bookIdShelfId}
            onShelfChanged={this.shelfChanged} />
        )} />
        <Route exact path='/' render={() => (
          <MyReadsBookShelves
            bookShelves={bookShelves}
            onShelfChanged={this.shelfChanged} />
        )} />
      </div>
    )
  }
}

export default BooksApp
