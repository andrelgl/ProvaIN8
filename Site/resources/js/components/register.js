import React from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../utils/variables'
import InputIN8 from './utils/input-in8'

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
                <InputIN8 label='Nome' id='name' type='text'/>
                <InputIN8 label='E-mail' id='email' type='text'/>
                <InputIN8 label='Nascimento' id='born' type='text'/>
                <InputIN8 label='Telefone' id='phone' type='text'/>
            </form>
            <div className={classes.formConfirm}>
                <button>Cadastrar</button>
            </div>
        </div>
    )
}

export default Register


