import React from 'react';
import {addMessageCreator, sendNewMessageBodyCreator} from "../../Redux/ReducerDialogs";
import Dialogs from "./Dialogs";


const ConteinerDialogs = (props) => {
    debugger;

    let state= props.stateDialogs.getState();

    let onMessageClick = () =>{
        state.dispatch(addMessageCreator());
    };
    let onNewMessageChange = (body) =>{
        state.dispatch(sendNewMessageBodyCreator(body));
    };
    debugger;
    return (<Dialogs dialogsState={state}
                     onMessageClick={onMessageClick}
                     onNewMessageChange={onNewMessageChange}/>)
}
export default ConteinerDialogs;