import React from 'react'
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
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        '& thead': {
            '&:not(:last-child)': {
                borderBottom: `1px solid ${Variables.colors.tableLine}`,
            },
            '&:first-child': {
                color: `${Variables.colors.tableColunmTitle}`,
                fontFamily: 'Roboto Regular',
                fontVariantCaps: 'all-petite-caps',
                fontSize: '18px'
            },
            '& th': {
                padding: '10px',
                textAlign: 'center',
                '&:not(:last-child)': {
                    borderRight: `1px solid ${Variables.colors.tableLine}`,
                },
                '&:first-child': {
                    color: `${Variables.colors.tableNumber}`,
                    fontFamily: 'Roboto Light'
                }
            }
        },
        '& tbody': {
            '& tr': {
                '&:not(:last-child)': {
                    borderBottom: `1px solid ${Variables.colors.tableLine}`,
                },
            },
            '& td': {
                padding: '10px',
                textAlign: 'center',
                '&:not(:first-child)': {
                    color: `${Variables.colors.tableContent}`,
                    fontFamily: 'Helvetica Condensed',
                },
                '&:not(:last-child)': {
                    borderRight: `1px solid ${Variables.colors.tableLine}`,
                },
                '&:first-child': {
                    color: `${Variables.colors.tableNumber}`,
                    fontFamily: 'Roboto Light'
                }
            }
        }
    }
})

const Table = ({ data }) => {
    const classes = useStyles()

    return (
        <div className={classes.tableWrapper}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Nascimento</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={`${item.id}-row`} id={`${item.id}-panel`}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.date_birth}</td>
                            <td>{item.telephone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
