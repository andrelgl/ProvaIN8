import React from 'react'
import GetImage from '../utils/getImage'
import Navbar from './Navbar'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    container: {
        backgroundImage: `url(${GetImage.indexImage})`,
        '@media (max-width: 768px)': {
            backgroundImage: `url(${GetImage.indexImageMobile})`
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
