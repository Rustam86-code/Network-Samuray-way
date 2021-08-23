import React from 'react';
import {addMessageCreator, sendNewMessageBodyCreator} from "../../Redux/ReducerDialogs";
import Dialogs from "./Dialogs";


const ConteinerDialogs = (props) => {


    let state= props.stateDialogs.getState();
    debugger;
    let onMessageClick = () =>{
        props.stateDialogs.dispatch(sendNewMessageBodyCreator());
    };
    let onNewMessageChange = (body) =>{
        props.stateDialogs.dispatch(addMessageCreator(body));
    };
    debugger;
    return (<Dialogs dialogs={state.reducerDialogs.dialogs}
                     messages={state.reducerDialogs.messages}
                     newMessageBody={state.reducerDialogs.newMessageBody}
                     onMessageClick={onMessageClick}
                     onNewMessageChange={onNewMessageChange}/>)
}
export default ConteinerDialogs;