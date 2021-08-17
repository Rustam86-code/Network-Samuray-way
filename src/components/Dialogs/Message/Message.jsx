import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
debugger;
    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
}
export default Message;