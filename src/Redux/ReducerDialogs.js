

const ADD_MESSAGE = 'ADD_MESSAGE';
const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';

const reducerDialogs = (state,action) => {
    debugger;
    switch (action.type) {
        case ADD_MESSAGE:
            state.newMessageBody = action.body;
            return state;
        case SEND_NEW_MESSAGE_BODY:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        default :  return state;
    }
}

export default reducerDialogs;