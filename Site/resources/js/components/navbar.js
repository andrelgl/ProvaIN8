import React, { useState, useRef, useEffect } from 'react'
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
        '@media (max-Width: 540px)': {
            justifyContent: 'space-between',
            padding: '0 2rem'
        }
    },
    in8Logo: {
        width: '200px',
        '@media (max-Width: 540px)': {
            width: '150px',
        }
    },
    listInline: {
        display: 'flex',
        color: 'white',
        listStyle: 'none',
        width: '260px',
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
        '@media (max-Width: 540px)': {
            width: '40px',
        }
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
        alignItems: 'flex-end',
        '&:before': {
            transitionDelay: '0.01s'
        },
        '@media (max-Width: 540px)': {
            height: '350px',
        }
    },
    list: {
        display: 'flex',
        flexDirection: 'Column',
        height: '200px',
        justifyContent: 'space-around',
        color: 'white',
        listStyle: 'none',
        fontSize: '25px',
        marginBottom: '3rem',
        marginLeft: '1.5rem',
        '@media (max-Width: 540px)': {
            paddingInlineStart: 0,
            marginLeft: '2rem',
            marginBottom: '2rem',
        },
        '& li': {
            '& a': {
                transition: '300ms',
                borderBottom: '1px solid transparent',
                cursor: 'pointer',
                '&:hover': {
                    borderColor: 'white',
                }
            },
        }
    }
})

const OptionsList = (props) => {
    return (
        <ul className={props.freeStyle}>
            <li><a>cadastro</a></li>
            {props.dot &&
                (<a>&#x25cf;</a>)}
            <li><a>lista</a></li>
            {props.dot &&
                (<a>&#x25cf;</a>)}
            <li><a>sobre mim</a></li>
        </ul>
    )
}

const Navbar = () => {
    const classes = useStyles()

    const menu = useRef()
    const [menuState, setMenuState] = useState(false)

    // close toggle menu if click out
    const handleClick = e => {
        if (menu.current.contains(e.target)) return
        setMenuState(false)
    }

    // close toggle menu if resize window
    const handleResize = e => {
        setMenuState(false)
    }


    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        window.addEventListener('resize', handleResize)
        return () => {
            document.removeEventListener('mousedown', handleClick)
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    return (
        <div className={classes.navbar}>
            <ReactSVG className={classes.toggleIcon}
                src={!menuState ? Variables.icons.toggleClosedIcon : Variables.icons.toggleOpenedIcon}
                onClick={e => setMenuState(!menuState)} />
            <ReactSVG
                className={classes.in8Logo}
                src={Variables.logos.in8} />
            <OptionsList freeStyle={classes.listInline} dot={true} />
            {menuState && (
                <div ref={menu} className={classes.toggleMenu}>
                    <OptionsList freeStyle={classes.list} />
                </div>
            )}
        </div>
    )
}

export default Navbar


