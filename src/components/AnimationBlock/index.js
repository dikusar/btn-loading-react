import React from 'react'
import injectSheet from 'react-jss'

// import styles
import styles from './styles'

// import app context to access number to display
import {AppContext} from '../Provider'

function AnimationBlock(props) {

   const { classes } = props;
    
    return (
        <AppContext.Consumer>
            {context => (
                <div className={classes.container}>
                    <div className={classes.circle}>
                        <div className={classes.spinnerLayer}>
                            <div className={classes.circleClipperLeft}>
                                <div className={classes.spinnerCircleLeft}></div>
                                <div className={classes.spinnerTriangular}></div>
                            </div>

                            <div className={classes.inner}>
                                <span style={{margin:'auto'}}>
                                    { context.numberToRender }
                                </span>
                            </div>

                            <div className={classes.circleClipperRight}>
                                <div className={context.isAmimate ? classes.spinnerCircleRightAnimate : classes.spinnerCircleRight}></div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </AppContext.Consumer>
    )
}


export default injectSheet(styles)(AnimationBlock)
