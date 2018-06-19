import React from 'react'
import injectSheet from 'react-jss'

// import styles
import styles from './styles'

// import app context to access number to display
import {AppContext} from '../Provider'

function AnimationBlock(props) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.circle}>
                <span className={classes.inner}>

                    <AppContext.Consumer>
                        {context => (
                            
                            <span>
                                {context.numberToRender}
                            </span>
                        )}
                    </AppContext.Consumer>

                </span>
            </div>
        </div>
    )
}

export default injectSheet(styles)(AnimationBlock)
