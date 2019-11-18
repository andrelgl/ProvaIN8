import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container: {
        backgroundColor: '#29abe2',
        height: '920px'
    }
})

const Register = () => {
    const classes = useStyles()
    return (
      <div className={classes.container}>
          Cadastrar
      </div>
    )
}

export default Register


