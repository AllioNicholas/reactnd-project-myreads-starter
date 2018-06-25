import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {

  const { books } = this.props

  render() {
    return(
      <ol className="books-grid">
      {books.map((book, index) => ({
        <Book key={index}/>
        })
      )}
      </ol>
    )
  }
}

export default BookList
