import React, {Component} from 'react';
import injectSheet from 'react-jss'

// import styles
import styles from './App.styles'
import './App.css';

// import custom components
import AnimationBlock from './components/AnimationBlock'
import ButtonsContainer from './components/ButtonsContainer'


class App extends Component {
    render() {
        const {classes}=this.props;
        const btnsToRender = 9;
        return (
                <div className="App">
                    {/* Header component */}
                    <header className={classes.header}>
                        <span className={classes.headerTitle}>
                            App
                        </span>
                    </header>


                    {/* Main */}
                    <main className={classes.main}>

                        {/*Animation component*/}
                        <AnimationBlock />

                        {/*Buttons container (with 'Button' children components)*/}
                        <ButtonsContainer btnsToRender={ btnsToRender } btnType="btnFloating" />

                    </main>

                </div>
        );
    }
}

export default injectSheet(styles)(App);
