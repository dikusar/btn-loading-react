import React from 'react'
import injectSheet from 'react-jss'

const styles = {
    container: {
        display: 'flex',
        flexGrow: 1
    },
    circle: {
        display: 'flex',
        height: 'calc(100vh - 40px)',
        width: 'calc(100vw - 40px)',
        maxWidth: 120,
        maxHeight: 120,
        margin: 'auto',
        borderRadius: 50 + '%',
        backgroundColor: '#2b9a35'
    },
    inner: {
        margin: 'auto',
        fontSize: 4 + 'rem',
        color: 'white'
    }
}

function AnimationBlock({classes}) {
    return (
        <div className={classes.container}>
            <div className={classes.circle}>
                <span className={classes.inner}>
                    0
                </span>
            </div>
        </div>
    )
}

export default injectSheet(styles)(AnimationBlock)
