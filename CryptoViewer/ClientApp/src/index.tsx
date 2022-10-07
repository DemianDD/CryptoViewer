import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './custom.css';
import { configureLinq } from './linq/Linq';
configureLinq();
ReactDOM.render(

        <App />,

    document.getElementById('root'));

//registerServiceWorker();