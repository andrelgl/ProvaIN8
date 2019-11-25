import React from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'
import InputIN8 from './utils/input-in8'

//component Style
const useStyles = createUseStyles({
    registerContainer: {
        backgroundColor: `${Variables.colors.registerBackground}`,
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        '@media (max-Width: 540px)': {
            padding: '0 2rem'
        },
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        maxHeight: '170px',
        fontFamily: 'Helvetica',
        fontSize: '4.2rem',
        fontVariantCaps: 'all-petite-caps',
        color: 'white',
        '@media (max-Width: 540px)': {
            fontSize: '3rem',
        },
    },
    formInput: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: '250px',
        maxWidth: '500px',
        justifyContent: 'space-between',
        width: '100%',
    },
    formConfirm: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        width: '296px',
        '& button': {
            minWidth: '100%',
            backgroundColor: `${Variables.colors.buttonRegisterBackground}`,
            color: `${Variables.colors.buttonRegisterText}`,
            fontFamily: 'Helvetica',
            fontVariantCaps: 'all-petite-caps',
            fontSize: '3rem',
            paddingBottom: '0.5rem',
            border: 'none',
        },
    }

})

const Register = () => {
    const classes = useStyles()
    return (
        <div className={classes.registerContainer}>
            <div className={classes.title}>
                Cadastro
            </div>
            <form action='' className={classes.formInput}>
                <InputIN8 label='Nome' id='name' type='text' />
                <InputIN8 label='E-mail' id='email' type='text' />
                <InputIN8 label='Nascimento' id='born' type='text' />
                <InputIN8 label='Telefone' id='phone' type='text' />
            </form>
            <div className={classes.formConfirm}>
                <button>Cadastrar</button>
            </div>
        </div>
    )
}

export default Register


