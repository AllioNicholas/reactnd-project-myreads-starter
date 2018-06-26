import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    return(
      <ol className="books-grid">
      {books.map((book, index) => (
        <li key={index}>
          <BookItem book={book}/>
        </li>
        )
      )}
      </ol>
    )
  }
}

export default BookList
