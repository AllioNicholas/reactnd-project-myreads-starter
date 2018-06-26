import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import MyReadsBookShelves from './MyReadsBookShelves'
import MyReadsSearchPage from './MyReadsSearchPage'

const bookShelves =[
  {
    title: 'Currently Reading',
    books: [
      {
        bookCover: {
          width: 128,
          height: 193,
          backgroundImage: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
        },
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee'
      },
      {
        bookCover: {
          width: 128,
          height: 188,
          backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
        },
        title: 'Ender\'s Game',
        authors: 'Orson Scott Card'
      },
      {
        bookCover: {
          width: 128,
          height: 193,
          backgroundImage: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
        },
        title: '1776',
        authors: 'David McCullough'
      }
    ]
  },
  {
    title: 'Want to Read',
    books: [
      {
        bookCover: {
          width: 128,
          height: 193,
          backgroundImage: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
        },
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee'
      },
      {
        bookCover: {
          width: 128,
          height: 188,
          backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
        },
        title: 'Ender\'s Game',
        authors: 'Orson Scott Card'
      },
      {
        bookCover: {
          width: 128,
          height: 193,
          backgroundImage: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
        },
        title: '1776',
        authors: 'David McCullough'
      }
    ]
  },
  {
    title: 'Read',
    books: [
      {
        bookCover: {
          width: 128,
          height: 193,
          backgroundImage: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
        },
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee'
      },
      {
        bookCover: {
          width: 128,
          height: 188,
          backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
        },
        title: 'Ender\'s Game',
        authors: 'Orson Scott Card'
      },
      {
        bookCover: {
          width: 128,
          height: 193,
          backgroundImage: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
        },
        title: '1776',
        authors: 'David McCullough'
      }
    ]
  },
]

class BooksApp extends React.Component {
  state = {
    bookShelves: []
  }

  render() {
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
