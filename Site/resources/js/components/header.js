import React from 'react'
import Navbar from './Navbar'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'

const useStyle = createUseStyles({
    container: {
        backgroundImage: `url(${Variables.images.indexImage})`,
        '@media (max-width: 768px)': {
            backgroundImage: `url(${Variables.images.indexImageMobile})`
        },
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flex: 1,
        height: '940px'
    }
})
const Header = () => {
    const classes = useStyle()
    return (
      <div className={classes.container}>
      <Navbar />
    </div>
    )

}

export default Header
