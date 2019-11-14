 import React, { Component } from 'react'
 import ReactDOM from 'react-dom'
 import { BrowserRouter } from 'react-router-dom'

 import Header from '../components/header/Header'

 class App extends Component {
   render () {
     return (
       <BrowserRouter>
         <div>
             <div className='TopImage'></div>
            <Header />
            <div>
                Teste
            </div>
        </div>
       </BrowserRouter>
     )
   }
 }

 ReactDOM.render(<App />, document.getElementById('app'))
