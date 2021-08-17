
import * as serviceWorker from './serviceWorker';
import store from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = (state) =>{
    debugger;
    ReactDOM.render(<BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store);
serviceWorker.unregister();
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


