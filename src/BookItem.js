import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  shelfChanged(event) {
    this.props.onShelfChanged(event.target.value)
  }

  render() {

    const { bookCover, title, authors, shelf } = this.props.book

    const style = {}
    if(style) {
      style.width = bookCover.width
      style.height = bookCover.height
      style.backgroundImage = `url("${bookCover.backgroundImage}")`
    }

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.shelfChanged}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none" defaultValue>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    )
  }
}

export default BookItem
