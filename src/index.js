import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import App from './components/App';

hydrate();
const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;