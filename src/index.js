import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss'

// import app provider
import {AppProvider} from './components/Provider'

import theme from './App.theme'
import './index.css';
import App from './App';

// import service worker to make app more progressive (pwa)
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <AppProvider theme={theme}>
            <App />
        </AppProvider>
    </ThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
