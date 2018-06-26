import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string
  }

  shelfChanged(event) {
    this.props.onShelfChanged(event.target.value)
  }

  render() {
    const { title, books } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookList books={books} onShelfChanged={this.shelfChanged}/>
        </div>
      </div>
    )
  }
}

export default Bookshelf
