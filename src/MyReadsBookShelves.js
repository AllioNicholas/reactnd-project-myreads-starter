import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class MyReadsBookShelves extends Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired
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
              <Bookshelf key={index} title={bookShelf.title} books={bookShelf.books}/>
            ))}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default MyReadsBookShelves
