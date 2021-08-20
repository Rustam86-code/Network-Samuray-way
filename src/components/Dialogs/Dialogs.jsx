import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItems/DialogsItem";
import Message from "./Message/Message";
import {addMessageCreator, sendNewMessageBodyCreator} from "../../Redux/ReducerDialogs";


const Dialogs = (props) => {

debugger;
    let dialogsElements = props.dialogs.map( d =>
        <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m =>
        <Message message={m.message} />);

    let newMessageBody= props.newMessageBody;

    let onMessageClick = () =>{
        props.onMessageClick(addMessageCreator());
    };
    let onNewMessageChange = (e) =>{
       let body = e.target.value;
       props.onNewMessageChange(sendNewMessageBodyCreator(body));
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
//TODO maintaining add messages and foad data ;