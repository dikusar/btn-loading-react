import React from 'react'
import injectSheet from 'react-jss'


// import styles
import styles from './styles'

// import custom components
import getButtonsValues from './getButtonsValues'
import Button from '../Button'

function ButtonsContainer({ classes, btnsToRender=[], btnType="" }) {

    return(
        <div className={classes.btnsContainer}>
            {
                getButtonsValues(btnsToRender).map(value => {

                    return (
                        <Button key={value} btnType={btnType} value={value}>
                            { value }
                        </Button>
                    )

                })
            }
        </div>
    )
    
     
}

export default injectSheet(styles)(ButtonsContainer)