import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/header'
import Register from '../components/register'
import Table from '../components/table'
import Footer from '../components/footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Header />
            <Register />
            <Table />
            <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
