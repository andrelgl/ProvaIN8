import React from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'

//component Style
const useStyles = createUseStyles({
    wraper: {
        backgroundColor: `${Variables.colors.registerBackground}`,
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        '& p': {
            fontFamily: 'Helvetica',
            fontSize: '4.2rem',
            fontVariantCaps: 'all-petite-caps',
            color: 'white',
            '@media (max-Width: 540px)': {
                fontSize: '3rem',
            }
        },
        '@media (max-Width: 540px)': {
            padding: '0 2rem'
        }
    },
    formInput: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        maxWidth: '500px',
        justifyContent: 'space-between',
        width: '100%',
    },
    inputContainer: {
        position: 'relative',
        '& input': {
            border: 0,
            borderBottom: '2px solid #9e9e9e',
            outline: 'none',
            transition: '.2s ease-in-out',
            boxSizing: 'border-box'
        },
        //modelo do input nesse site
        //https://mariosouto.com/inputs-materializados-com-css/
    },
    formConfirm: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        width: '296px',
        '& button': {
            height: '56px',
            minWidth: '100%',
            backgroundColor: `${Variables.colors.buttonRegisterBackground}`,
            color: `${Variables.colors.buttonRegisterText}`,
            fontFamily: 'Helvetica',
            fontVariantCaps: 'all-petite-caps',
            fontSize: '3rem',
            border: 'none',
        },
    }

})

const Register = () => {
    const classes = useStyles()
    return (
        <div className={classes.wraper}>
            <p>Cadastro</p>
            <form action='' className={classes.formInput}>
                <div className={classes.inputContainer}>
                    <input id='name' type='text' pattern='.+' required />
                    <label for='name'>Nome</label>
                </div>
            </form>
            <div className={classes.formConfirm}>
                <button>Cadastrar</button>
            </div>
        </div>
    )
}

export default Register


