import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/header'
import Register from '../components/register'
import EntriesList from '../components/entriesList'
import Footer from '../components/footer'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Register />
                <EntriesList />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
