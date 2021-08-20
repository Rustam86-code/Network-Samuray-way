

const ADD_MESSAGE = 'ADD_MESSAGE';
const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';

let initialState = {
    dialogsPage: {
        dialogs: [
            {id: 0, name: 'Rustam'},
            {id: 1, name: 'Olga'},
            {id: 2, name: 'Adele'},
            {id: 3, name: 'Maksut'},
            {id: 4, name: 'Kultay'},
            {id: 5, name: 'Dinara'},
            {id: 6, name: 'Alim'}
        ],
        messages: [
            {id: 0, message: 'Hi, how are you?'},
            {id: 1, message: 'Fain, and you?'},
            {id: 2, message: "Thanks, I'm good!"},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ],
        newMessageBody:'fffff'}
};

const reducerDialogs = (state = initialState,action) => {

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

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const sendNewMessageBodyCreator = (body) =>
    ({type: SEND_NEW_MESSAGE_BODY, body: body})

export default reducerDialogs;