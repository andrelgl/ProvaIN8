import React, { useState, useLayoutEffect } from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'
import Table from './utils/table'
import Tab from './utils/tab'
import ReactSVG from 'react-svg'

const useStyles = createUseStyles({
    entriesContainer: {
        backgroundColor: '#fff',
        height: '500px',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        '@media (max-Width: 960px)': {
            padding: '0 2rem'
        },
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        fontFamily: 'Helvetica',
        fontSize: '4.2rem',
        fontVariantCaps: 'all-petite-caps',
        maxHeight: '200px',
        color: `${Variables.colors.registerListTitle}`,
        '@media (max-Width: 540px)': {
            fontSize: '3rem',
            textAlign: 'center',
        },
    },
    goTop: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end'
    },
    icon: {
        width: '45px',
        cursor: 'pointer',
        marginRight: '90px',
    }

})

const useWindowSize = () => {
    const [size, setSize] = useState(0)
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}

const EntiesList = ({ traineers }) => {
    const classes = useStyles()
    const width = useWindowSize()

    return (
        <div id='section2' className={classes.entriesContainer}>
            <div className={classes.title}> Lista de cadastro </div>
            {width > 720 ? <Table data={traineers} /> : <Tab data={traineers} />}
            {width > 1100 &&
                <div className={classes.goTop}>
                    <ReactSVG src={Variables.icons.topPage}
                        onClick={() => window.scrollTo(0, 0)} className={classes.icon} />
                </div>
            }
        </div>
    )
}

export default EntiesList


