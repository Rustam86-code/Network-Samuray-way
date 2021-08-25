
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reduxStore from "./Redux/Redux-Store";
import {Provider} from "react-redux";


let rerenderEntireTree = (state) =>{

    ReactDOM.render(<BrowserRouter>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(reduxStore);
serviceWorker.unregister();
reduxStore.subscribe(() =>{
    let state = reduxStore;
    rerenderEntireTree(state);});


