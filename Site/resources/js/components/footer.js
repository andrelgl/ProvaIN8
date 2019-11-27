import React from 'react'
import {createUseStyles} from 'react-jss'
import Variables from '../utils/variables'

const useStyles = createUseStyles({
    footerContainer: {
        backgroundImage: `url(${Variables.images.rodapeDesktop})`,
        height: '334px',
        '@media (max-width: 768px)': {
            backgroundImage: `url(${Variables.images.rodapeMobile})`,
            maxHeight: '336px'
        },
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Roboto Light',
        color: 'white'
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
      <div className={classes.footerContainer}>
        <p>André Luiz Gomes Lages</p>
        <p>andrelgl@hotmail.com.br</p>
        <p>(31) 9 9666-1111</p>
        <p>Unibh</p>
      </div>)
}

export default Footer

