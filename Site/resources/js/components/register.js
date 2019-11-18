import React from 'react'
import {createUseStyles} from 'react-jss'
import Variables from '../utils/variables'

const useStyles = createUseStyles({
    container: {
        backgroundColor: `${Variables.colors.registerBackground}`,
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


