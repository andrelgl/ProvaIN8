import React from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'
import ReactSVG from 'react-svg'

//component Style
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
            <div>
                <ReactSVG src={Variables.logos.in8}/>
            </div>
            <div>
                <button>cadastro</button>
                <button>lista</button>
                <button>sobre mim</button>
            </div>
        </div>
    )
}

export default Navbar


