import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        backgroundColor: '#fff',
        height: '880px'
    }
})

const Table = () => {
    const classes = useStyles()
    return (
      <div className={classes.container}>
          Table
      </div>
    )
}

export default Table


