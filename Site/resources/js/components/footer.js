import React from 'react'
import {createUseStyles} from 'react-jss'
import GetImage from '../utils/getImage'

const useStyles = createUseStyles({
    container: {
        backgroundImage: `url(${GetImage.rodapeDesktop})`,
        height: '334px',
        '@media (max-width: 768px)': {
            backgroundImage: `url(${GetImage.rodapeMobile})`,
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

