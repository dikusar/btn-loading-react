import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss'
import theme from './App.theme'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
