import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import AppRoutes from './routes';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();






ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
