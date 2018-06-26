import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import MyReadsBookShelves from './MyReadsBookShelves'
import MyReadsSearchPage from './MyReadsSearchPage'

class BooksApp extends React.Component {
  state = {
    currentlyReadingShelf: [],
    wantToReadShelf: [],
    readShelf: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      let currently = []
      let wantTo = []
      let read = []

      books.map((book) => {
        const newBook = {}

        newBook.id= book.id
        newBook.title = book.title
        newBook.authors = book.authors
        newBook.shelf = book.shelf
        newBook.bookCover = {
          backgroundImage: book.imageLinks.thumbnail,
          width: 128,
          heigth: 193
        }

        if (book.shelf === 'currentlyReading') {
          currently.push(newBook)
        } else if (book.shelf === 'wantToRead') {
          wantTo.push(newBook)
        } else if (book.shelf === 'read') {
          read.push(newBook)
        }
      })

      this.setState((prevState) => ({
          currentlyReadingShelf: prevState.currentlyReadingShelf.concat(currently),
          wantToReadShelf: prevState.wantToReadShelf.concat(wantTo),
          readShelf: prevState.readShelf.concat(read)
        }))
    })
  }

  render() {
    const { currentlyReadingShelf, wantToReadShelf, readShelf } = this.state
    const bookShelves = [
      {
        title: 'Currently Reading',
        books: currentlyReadingShelf
      },
      {
        title: 'Want To Read',
        books: wantToReadShelf
      },
      {
        title: 'Read',
        books: readShelf
      }
    ]

    return (
      <div className="app">
        <Route path='/search' component={MyReadsSearchPage} />
        <Route exact path='/' render={() => (
          <MyReadsBookShelves bookShelves={bookShelves}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
