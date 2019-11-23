import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    inputContainer: {
        position: 'relative',
        '& input, & label': {
            width: '100%',
            height: '2rem',
            fontSize: '1rem'
        },
        '& input': {
            border: 0,
            borderBottom: '1px solid #fff',
            outline: 'none',
            transition: '.2s ease-in-out',
            boxSizing: 'border-box',
            backgroundColor: 'transparent',
            fontFamily: 'Roboto Condensed',
            color: '#fff',

            '&:valid, &:focus': {
                borderBottom: '2px solid #fff',

                '&+ label': {
                    color: '#fff',
                    fontSize: '.8rem',
                    top: '-30px',
                    pointerEvents: 'none'
                }
            }
        },
        '& label': {
            top: 0,
            left: 0,
            right: 0,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            cursor: 'text',
            transition: '.2s ease-in-out',
            boxSizing: 'border-box',
            fontFamily: 'Roboto Regular'
        }
    },
})

const InputIN8 = ({id,label,type}) => {
    const classes = useStyles()
    return (
        <div className={classes.inputContainer}>
            <input id={id} type={type} pattern='.+' required />
            <label for={id}>{label}</label>
        </div>
    )
}

export default InputIN8
