import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class BookshelfList extends Component {
  render() {

    const { bookShelves } = this.props

    return(
      <ol >
      {bookShelves.map((bookShelf, index) => ({
        <Bookshelf key={index}/>
        })
      )}
      </ol>
    )
  }
}

export default BookshelfList
