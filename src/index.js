import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
//import FontAwesome from "react-fontawesome";
//import faStyles from "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
