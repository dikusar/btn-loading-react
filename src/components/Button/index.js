import React from 'react';
import injectSheet from 'react-jss'

// Custom styles
import styles from './styles'

// import app context to access func to update numberToRender
import {AppContext} from '../Provider'

function Button({classes, btnType='btn', children, value}) {
    return (
        <AppContext.Consumer>
            {context => (
                <button className={classes[btnType]} onClick={()=> {
                    context.updateNumberToRender(value)
                }}>
                    { children }
                </button>
            )}
        </AppContext.Consumer>
    )
}

export default injectSheet(styles)(Button)