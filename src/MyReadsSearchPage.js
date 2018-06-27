import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


import BookList from './BookList'

class MyReadsSearchPage extends Component {
  static propTypes = {
    booksOnShelves: PropTypes.object.isRequired,
    onShelfChanged: PropTypes.func.isRequired
  }

  state = {
    query: '',
    retrievedBooks: [],
  }

  // Query update
  updateQuery = (query) => {
    this.searchBook(query)

    this.setState(() => ({
      query: query
    }))
  }

  searchBook = (searchQuery) => {
    if (searchQuery.length === 0) {
      this.setState(() => ({
        retrievedBooks: []
      }))
    } else if (searchQuery.length === 1) {
      BooksAPI.search(searchQuery)
      .then((results) => {
        if (!Array.isArray(results)) {
          results = results["items"]
        }

        const { booksOnShelves } = this.props
        let books = []
        for (let book of results) {
          const newBook = {}

          newBook.id= book.id
          newBook.title = book.title
          newBook.authors = book.authors !== undefined ? book.authors : []
          newBook.shelf = booksOnShelves[book.id] ? booksOnShelves[book.id] : 'none'
          newBook.bookCover = book.imageLinks !== undefined ?
          {
            backgroundImage: book.imageLinks.thumbnail,
            width: 128,
            height: 193
          }
          : {}

          books.push(newBook)
        }

        this.setState(() => ({
          retrievedBooks: books
        }))
      })
    }
  }

  // Shelf changed
  shelfChanged = (book, shelf) => {
    const { retrievedBooks } = this.state

    let changedBooks = []
    for (let retrieved of retrievedBooks) {
      if (retrieved.id === book.id) {
        retrieved.shelf = shelf
      }
      changedBooks.push(retrieved)
    }

    this.setState(() => ({
        retrievedBooks: changedBooks
    }))
    this.props.onShelfChanged(book, shelf)
  }

  render() {
    const { query, retrievedBooks } = this.state

    const showingBooks = query === ''
      ? []
      : retrievedBooks.filter((b) => (
          b.title.toLowerCase().includes(query.toLowerCase()) ||
          b.authors.toString().toLowerCase().includes(query.toLowerCase())
      ))

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={showingBooks} onShelfChanged={this.shelfChanged}/>
        </div>
      </div>
    )
  }
}

export default MyReadsSearchPage
