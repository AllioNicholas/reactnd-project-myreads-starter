import React, { Component } from 'react'

class Bookshelf extends Component {

  const { bookShelfTitle, books } = this.props

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookList />
        </div>
      </div>
    )
  }
}

export default Bookshelf