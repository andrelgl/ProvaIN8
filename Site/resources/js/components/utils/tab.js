import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import Variables from '../../utils/variables'

const useStyles = createUseStyles({
    tabWrapper: {
        display: 'flex',
        flex: 2,
        width: '100%',
        minWidth: '300px',
    },
    tabInner: {
        width: '100%'
    },
    tab: {
        flex: 1,
        padding: '0.4rem 0.8rem',
        textAlign: 'center',
        fontFamily: 'Roboto Light',
        border: `${Variables.colors.tableContent} 2px solid`,
        borderBottom: 'none',
        marginBottom: 0,
        backgroundColor: '#fff',
        fontWeight: 600,
        '&:not(:last-child)': {
            marginRight: '0.25rem'
        }
    },
    tabSelected: {
        backgroundColor: 'white',
        border: `${Variables.colors.tableLine} 2px solid`,
        borderBottomColor: 'transparent'
    },
    tabList: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    tabPanel: {
        display: 'flex',
        flex: '1',
        padding: '0.5rem 1rem 2rem 1rem',
        border: `${Variables.colors.tableContent} 2px solid`,
        height: '100%',
        maxHeight: '180px',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    tabPanelContent: {
        fontFamily: 'Roboto Regular',
        color: `${Variables.colors.tableColunmTitle}`,
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderBottom: `${Variables.colors.tableLine} 1px solid`,
        paddingBottom: '0.4rem',
        '& div': {
            width: '4rem'
        },
        '& span': {
            fontFamily: 'Helvetica Condensed',
            color: `${Variables.colors.tableContent}`,
            marginLeft: '1rem'
        }
    },
    show: {
        border: `${Variables.colors.tableLine} 2px solid`,
    },
    hide: {
        display: 'none'
    }

})

const Toggle = (type, selectedItem) => {
    const [activeItem, setActiveItem] = useState(selectedItem)
    const [items, setItems] = useState([])

    const changeItem = id => {
        const isTabs = type === "tabs"
        const isAlreadyActive = activeItem === id
        const idSelected = isAlreadyActive && !isTabs ? 0 : id
        setActiveItem(idSelected)
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = [
                {
                    "id": 1,
                    "name": "teste1",
                    "email": "teste@test.com.br",
                    "born": "07/10/1993",
                    "phone": "(31) 9 9476-8390"
                },
                {
                    "id": 2,
                    "name": "teste2",
                    "email": "teste@test.com.br",
                    "born": "07/10/1993",
                    "phone": "(31) 9 9476-8390"
                },
                {
                    "id": 3,
                    "name": "teste3",
                    "email": "teste@test.com.br",
                    "born": "07/10/1993",
                    "phone": "(31) 9 9476-8390"
                },
                {
                    "id": 4,
                    "name": "teste4",
                    "email": "teste@test.com.br",
                    "born": "07/10/1993",
                    "phone": "(31) 9 9476-8390"
                }
            ]
            setItems(data)
        }
        fetchData()
    }, [type])

    return [items, activeItem, changeItem]
}

const Tab = () => {
    const classes = useStyles()
    const [tabs, activeTab, setActiveTab] = Toggle("tabs", 1);

    //if (tabs.length < 1) return <div>Sem tabs</div>

    const createTabs = () =>
        tabs.map(tab => (
            <div
                key={`${tab.id}-tab`}
                role='tab'
                aria-selected={tab.id === activeTab}
                id={`${tab.id}-panel`}
                aria-controls={`${tab.id}-content-panel`}
                onClick={() => setActiveTab(tab.id, 'tabs')}
                className={tab.id === activeTab ? `${classes.tab} ${classes.tabSelected}` : `${classes.tab}`}
            >
                {tab.id}
            </div>
        ))

    const createTabsPanels = () =>
        tabs.map(tab => (
            <div
                key={`${tab.id}-panel`}
                id={`${tab.id}-content-panel`}
                role='tabpanel'
                aria-labelledby={`${tab.id}-tab`}
                className={`${classes.tabPanel} ${tab.id === activeTab ? classes.show : classes.hide}`}
            >
                <div className={classes.tabPanelContent}>
                    <div>NOME</div>
                    <span>{tab.name}</span>
                </div>
                <div className={classes.tabPanelContent}>
                    <div>E-MAIL</div>
                    <span>{tab.email}</span>
                </div>
                <div className={classes.tabPanelContent}>
                    <div>NASC.</div>
                    <span>{tab.born}</span>
                </div>
                <div className={classes.tabPanelContent}>
                    <div>TEL.</div>
                    <span>{tab.phone}</span>
                </div>
            </div>
        ))


    return (
        <div className={classes.tabWrapper}>
            <div className={classes.tabInner}>
                <div role="tablist" className={classes.tabList}>
                    {createTabs()}
                </div>
                {createTabsPanels()}
            </div>
        </div>
    )
}

export default Tab
