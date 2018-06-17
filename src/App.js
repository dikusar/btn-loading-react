import React, {Component} from 'react';
import injectSheet from 'react-jss'

import './App.css';

const styles = theme => ({
    header: {
        backgroundColor: theme.colorPrimary,
        height: 64,
        color: 'white',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
    },
    main: {
        
    }
})

class App extends Component {
    render() {
        const {classes}=this.props;
        return (
                <div className="App">
                    {/* Header component */}
                    <header className={classes.header}>
                    </header>


                    {/* Main */}
                    <main className={classes.main}>

                    </main>

                </div>
        );
    }
}

export default injectSheet(styles)(App);
