import React from 'react'
import {createUseStyles} from 'react-jss'
import Variables from '../utils/variables'

const useStyles = createUseStyles({
    container: {
        backgroundImage: `url(${Variables.images.rodapeDesktop})`,
        height: '334px',
        '@media (max-width: 768px)': {
            backgroundImage: `url(${Variables.images.rodapeMobile})`,
            height: '756px'
        },
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flex: 1,
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
      <div className={classes.container}></div>)
}

export default Footer

