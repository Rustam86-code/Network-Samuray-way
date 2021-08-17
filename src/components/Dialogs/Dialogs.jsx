import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItems/DialogsItem";
import Message from "./Message/Message";
import {addMessageCreator, sendNewMessageBodyCreator} from "../../Redux/State";


const Dialogs = (props) => {
    debugger;

    let state=props.stateDialogs._state.dialogsPage;

    let dialogsElements = state.dialogs.map( d =>
        <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m =>
        <Message message={m.message} />);

    let newMessageBody= state.newMessageBody;

    let onMessageClick = () =>{
        props.stateDialogs.dispatch(addMessageCreator());
    };
    let onNewMessageChange = (event) =>{
       let body = event.target.value;
       props.stateDialogs.dispatch(sendNewMessageBodyCreator(body));
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'/>
                    </div>
                    <div><button onClick={onMessageClick}>send message
                    </button></div>
                </div>

            </div>
            <DialogsItem />
            <Message />
        </div>
    )
}
export default Dialogs;