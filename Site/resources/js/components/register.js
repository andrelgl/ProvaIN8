import React, { useState } from 'react'
import axios from 'axios'

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
            cursor: 'pointer',
        },
    }

})

// modelo do initia state
const initialState = {
    name: { value: '', errors: [] },
    email: { value: '', errors: [] },
    date_birth: { value: '', errors: [] },
    telephone: { value: '', errors: [] },
}

const Register = ({ onSubimit }) => {
    const classes = useStyles()
    const [data, setData] = useState(initialState)

    const setValue = (key) => (value) => setData({ ...data, [key]: { ...data[key], value } })
    const setErrors = (key, errors) => setData({ ...data, [key]: { ...data[key], errors } })
    // validação de campos
    const validate = () => {
        const n = Object.keys(data).reduce((a, b) => ({ ...a, [b]: { ...data[b], errors: [] } }), {})

        if (!n.name.value)
            n.name.errors.push('Necessário informar um nome!')
        if (!n.email.value)
            n.email.errors.push('Necessário informar um e-mail!')
        if (!/[^@]+@[^\.]+\..+/i.test(n.email.value))
            n.email.errors.push('O email informado não é valido!')
        if (!n.date_birth.value)
            n.date_birth.errors.push('Necessário informar uma data de nascimento!')
        if (!Date.parse(n.date_birth.value) || !/(\d{2}\/\d{2}\/\d{4})/g.test(n.date_birth.value))
            n.date_birth.errors.push('Data incorreta, formato aceito dd/mm/aaaa')
        if (!n.telephone.value)
            n.telephone.errors.push('Necessário informar um telefone!')

        setData(n)

        return Object.keys(n).reduce((a, b) => a + n[b].errors.length, 0) === 0
    }

    const submit = async () => {
        try {
            if(!validate()) return
            const trainee = Object.keys(data).reduce((a, b) => ({ ...a, [b]: data[b].value }), {})
            const response = await axios.post('/api/traineers', trainee)
            if (response.status < 400){
                onSubimit()
                setData(initialState)
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                const errors = error.response.data.errors
                Object.keys(errors).forEach(key => setErrors(key, errors[key]))
            }
        }
    }

    return (
        <div id='section1' className={classes.registerContainer}>
            <div className={classes.title}>
                Cadastro
            </div>
            <form action='' className={classes.formInput}>
                <InputIN8 label='Nome' type='text'
                    value={data.name.value}
                    errors={data.name.errors}
                    onChange={setValue('name')}
                />
                <InputIN8 label='E-mail' type='text'
                    value={data.email.value}
                    errors={data.email.errors}
                    onChange={setValue('email')}
                />
                <InputIN8 label='Nascimento' type='text'
                    value={data.date_birth.value}
                    errors={data.date_birth.errors}
                    onChange={setValue('date_birth')}
                />
                <InputIN8 label='Telefone' type='text'
                    value={data.telephone.value}
                    errors={data.telephone.errors}
                    onChange={setValue('telephone')}
                />
            </form>
            <div className={classes.formConfirm}>
                <button onClick={submit}>Cadastrar</button>
            </div>
        </div>
    )
}

export default Register


