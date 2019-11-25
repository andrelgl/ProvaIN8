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

const Table = (props) => {

    const classes = useStyles()

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
                <tr>
                    <td>1</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr>
            </table>
        </div>
    )
}

export default Table
