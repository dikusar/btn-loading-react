import React, {Component} from 'react';
import injectSheet from 'react-jss'

// import styles
import './App.css';

// import custom components
import getButtonsValues from './components/Button/getButtonsValues'
import Button from './components/Button'
import AnimationBlock from './components/AnimationBlock'

// Create style theme
const styles = theme => ({
    header: {
        backgroundColor: theme.colorPrimary,
        height: theme.headerHeight,
        color: 'white',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'
    },
    main: {
        width: '100%',
        minHeight: `calc(100vh - ${theme.headerHeight}px)`,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        height: '100%'
    },
    btnsContainer: {
        flexGrow: 1,
        maxHeight: 80
    }
})

class App extends Component {
    render() {
        const {classes}=this.props;
        const btnsCount = 9;
        return (
                <div className="App">
                    {/* Header component */}
                    <header className={classes.header}>
                    </header>


                    {/* Main */}
                    <main className={classes.main}>

                        {/*Animation component*/}
                        <AnimationBlock />

                        {/*Buttons*/}
                        <div className={classes.btnsContainer}>
                            {
                                getButtonsValues(btnsCount).map(value => {
                                    return (
                                        <Button key={value} btnType="btnFloating">
                                            { value }
                                        </Button>
                                    )
                                })
                            }
                        </div>

                    </main>

                </div>
        );
    }
}

export default injectSheet(styles)(App);
