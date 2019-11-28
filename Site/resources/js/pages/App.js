import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/header'
import Register from '../components/register'
import EntriesList from '../components/entriesList'
import Footer from '../components/footer'


const App = () => {
    const [traineers, setTraineers] = useState([])

    const fetchData = async () => {
        const data = await axios.get('/api/traineers')
            .then(res => res.data)
        setTraineers(data)
    }

    useEffect(() => fetchData(), [])

    return (
        <BrowserRouter>
            <div>
                <Header />
                <Register onSubmit={fetchData} />
                <EntriesList traineers={traineers} />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))


