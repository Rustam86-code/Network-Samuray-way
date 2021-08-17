import reducerDialogs from "./ReducerDialogs";
import reducerProfile from "./ReducerProfile";
import reducerSidebar from "./ReducerSidebar";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD_MESSAGE';
const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';
debugger;
let store = {
    _state: {
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
            newMessageBody:'fffff'
        },
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likesCount: '10'},
                {id: 1, message: 'Fain, and you?', likesCount: '11'}
            ],
            newPostText: 'ffffff'
        },
        sidebar: {
            names: [
                {id: 0, name: 'Rustam'},
                {id: 0, name: 'Olga'},
                {id: 0, name: 'Adele'}
            ]
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = reducerProfile(this._state.profilePage, action);
        this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action);
        this._state.sidebar = reducerSidebar(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const sendNewMessageBodyCreator = (body) =>
    ({type: SEND_NEW_MESSAGE_BODY, body: body})

export default store;
