import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../../utils/variables'

const useStyles = createUseStyles({
    tableWrapper: {
        flex: 2,
        display: 'flex',
        width: '100%',
        maxWidth: '800px',
        justifyContent: 'center',
        maxHeight: '200px',
        overflowY: 'auto',
        '& table': {
            width: '100%',
            borderCollapse: 'collapse',
            '& tr': {
                '&:not(:last-child)': {
                    borderBottom: `1px solid ${Variables.colors.tableLine}`,
                },
                '&:first-child': {
                    color: `${Variables.colors.tableColunmTitle}`,
                    fontFamily: 'Roboto Regular',
                    fontVariantCaps: 'all-petite-caps',
                    fontSize: '18px',

                }
            },
            '& td': {
                '&:not(:first-child)': {
                    color: `${Variables.colors.tableContent}`,
                    fontFamily: 'Helvetica Condensed',
                },
            }
            ,
            '& th, & td': {
                padding: '10px',
                textAlign: 'center',
                '&:not(:last-child)': {
                    borderRight: `1px solid ${Variables.colors.tableLine}`,
                },
                '&:first-child': {
                    color: `${Variables.colors.tableNumber}`,
                    fontFamily: 'Roboto Light'
                }
            },

        }
    }
})
const getItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get('/api/traineers')
                .then(res => res.data)
            setItems(data)
        }
        fetchData()
    }, [])

    return items
}


const Table = () => {
    const items = getItems()
    const classes = useStyles()
    let cont = 1
    const row = () =>
        items.map(item => (
            <tr
                key={`${item.id}-row`}
                role='row'
                id={`${item.id}-panel`}
            >
                <td>{cont++}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.date_birth}</td>
                <td>{item.telephone}</td>
            </tr>
        ))

    return (
        <div className={classes.tableWrapper}>
            <table>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Nascimento</th>
                    <th>Telefone</th>
                </tr>
                {row()}
            </table>
        </div>
    )
}

export default Table
