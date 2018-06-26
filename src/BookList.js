import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  shelfChanged(event) {
    this.props.onShelfChanged(event.target.value)
  }

  render() {
    const { books } = this.props

    return(
      <ol className="books-grid">
      {books.map((book, index) => (
        <li key={index}>
          <BookItem book={book} onShelfChanged={this.shelfChanged}/>
        </li>
        )
      )}
      </ol>
    )
  }
}

export default BookList
