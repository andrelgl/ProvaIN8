import React, { Component } from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
    display: 'flex',
    flex: 1,
    height: '64px',
    color: 'white'
    }
})

const Navbar = () => {
    const classes = useStyles()
    return (
      <div className={classes.container}>
        <button>teste</button>
        <button>teste2</button>
        <button>teste3</button>
      </div>
    )
}

export default Navbar


