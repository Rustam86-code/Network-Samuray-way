import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageCreator, sendNewMessageBodyCreator} from "../../Redux/ReducerDialogs";


const mapStateToProps = (reduxStore) => {
    return {
        dialogs: reduxStore.reducerDialogs.dialogs,
        messages: reduxStore.reducerDialogs.messages,
        newMessageBody: reduxStore.reducerDialogs.newMessageBody

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMessageClick: () => {
            dispatch(addMessageCreator());
        },
        onNewMessageChange: (body) => {
            dispatch(sendNewMessageBodyCreator(body));
        }
    }
}

const ConteinerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default ConteinerDialogs;

// const CConteinerDialogs = (props) => {
//
//
//     let state = props.stateDialogs.getState();
//     debugger;
//     let onMessageClick = () => {
//         props.stateDialogs.dispatch(sendNewMessageBodyCreator());
//     };
//     let onNewMessageChange = (body) => {
//         props.stateDialogs.dispatch(addMessageCreator(body));
//     };
//     debugger;
//     return (<Dialogs dialogs={state.reducerDialogs.dialogs}
//                      messages={state.reducerDialogs.messages}
//                      newMessageBody={state.reducerDialogs.newMessageBody}
//                      onMessageClick={onMessageClick}
//                      onNewMessageChange={onNewMessageChange}/>)
// }
// export default CConteinerDialogs;