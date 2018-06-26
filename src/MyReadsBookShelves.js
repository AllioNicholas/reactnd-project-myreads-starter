import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class MyReadsBookShelves extends Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired
  }

  shelfChanged(event) {
    this.props.onShelfChanged(event.target.value)
  }

  render() {
    const { bookShelves } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookShelves.map((bookShelf, index) => (
              <Bookshelf
                key={index}
                title={bookShelf.title}
                books={bookShelf.books}
                onShelfChanged={this.shelfChanged} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyReadsBookShelves
