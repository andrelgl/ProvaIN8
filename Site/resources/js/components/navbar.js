import React, { useState,  useRef, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'
import ReactSVG from 'react-svg'


//component Style
const useStyles = createUseStyles({
    navbar: {
        display: 'flex',
        flex: 1,
        fontFamily: 'Roboto Regular',
        height: '150px',
        justifyContent: 'space-around',
        alignItems: 'center',
        '@media (max-width: 1024px)': {
            justifyContent: 'space-between',
            padding: '0 4rem'
        },
    },
    in8Logo: {
        width: '200px',
    },
    listInline: {
        display: 'flex',
        color: 'white',
        listStyle: 'none',
        width: '240px',
        justifyContent: 'space-between',
        fontSize: '18px',
        '& li': {
            transition: '300ms',
            borderBottom: '1px solid transparent',
            '&:hover': {
                borderColor: 'white',
            },
            '& a': {
                cursor: 'pointer'
            }
        },
        '@media (max-width: 1024px)': {
            width: '0',
            position: 'absolute',
            zIndex: '-1',
            visibility: 'hidden',
        },
    },
    toggleIcon: {
        position: 'absolute',
        zIndex: '-1',
        '@media (max-width: 1024px)': {
            width: '50px',
            position: 'initial',
            zIndex: 9000,
            cursor: 'pointer',
        },
    },
    toggleMenu: {
        width: '300px',
        height: '400px',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: `${Variables.colors.registerBackground}`,
        display: 'flex',
        flex: 1,
        paddingLeft: '1.6rem',
        alignItems: 'flex-end',
        '&:before': {
            transitionDelay: '0.01s'
        }
    },
    toggleMenuEnv: {
        width: '300px',
        height: '400px',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '-1',
        visibility: 'hidden'
    },
    list: {
        display: 'flex',
        flexDirection: 'Column',
        height: '200px',
        justifyContent: 'space-around',
        color: 'white',
        listStyle: 'none',
        fontSize: '25px',
        'marginBottom': '3rem',
        '& li': {
            '& a': {
                transition: '300ms',
                borderBottom: '1px solid transparent',
                cursor: 'pointer',
                '&:hover': {
                    borderColor: 'white',
                }
            },
        },
    }

})
const OptionsList = (props) => {
    return (
        <ul className={props.freeStyle}>
            <li><a>cadastro</a></li>
            <li><a>lista</a></li>
            <li><a>sobre mim</a></li>
        </ul>
    )
}
const Navbar = () => {
    const classes = useStyles()
    const [menuState, setMenuState] = useState(true)

    const showMenu = () => {
        setMenuState(menuState === false ? true : false)
    }

    return (
        <div className={classes.navbar}>
            <ReactSVG className={classes.toggleIcon} src={menuState ? Variables.icons.toggleClosedIcon : Variables.icons.toggleOpenedIcon} onClick={showMenu} />
            <ReactSVG className={classes.in8Logo} src={Variables.logos.in8} />
            <OptionsList freeStyle={classes.listInline} />
            <div className={`${menuState ? classes.toggleMenuEnv : classes.toggleMenu}`} onMouseOut={showMenu}>
                <OptionsList freeStyle={classes.list} />
            </div>
        </div>
    )
}

export default Navbar


