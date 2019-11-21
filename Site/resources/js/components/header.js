import React from 'react'
import Navbar from './Navbar'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'

//style component
const useStyle = createUseStyles({
    container: {
        backgroundImage: `url(${Variables.images.indexImage})`,
        '@media (max-width: 768px)': {
            backgroundImage: `url(${Variables.images.indexImageMobile})`
        },
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '940px'
    },
    text: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontVariantCaps: 'all-petite-caps',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        alignItems: 'center',
        marginTop: '100px',
        marginLeft: '-30%',
        '@media (max-width: 768px)': {
            marginTop: '-3rem',
            marginLeft: '0',
        },
    },
    title: {
        marginBottom: '-1.8rem',
        fontSize: '10rem',
        '@media (max-Width: 540px)': {
            fontSize: '7rem',
        },
    },
    subtitle: {
        fontSize: '4.2rem',
        '@media (max-Width: 540px)': {
            fontSize: '2.9rem',
        },
    }
})

const Header = () => {
    const classes = useStyle()
    return (
        <div className={classes.container}>
            <Navbar />
            <div className={classes.text}>
                <div className={classes.title}>Estágio</div>
                <div className={classes.subtitle}>Prova de seleção</div>
            </div>
        </div>
    )
}

export default Header
