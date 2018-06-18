import React from 'react';
import injectSheet from 'react-jss'

// Custom styles
import styles from './styles'

function Button({classes, btnType='btn', children}) {
    return (
        <button className={classes[btnType]}>
            { children }
        </button>
    )
}

export default injectSheet(styles)(Button)