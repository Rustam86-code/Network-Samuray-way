import users from "../components/Users/Users";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 0, photoUrl:"https://iconarchive.com/show/free-space-icons-by-goodstuff-no-nonsense/rick-icon.html",
            followed: false, fullName: 'Rustam', status: 'Hi, how are you?', location:{country: 'Kazakhstan', city: 'Rudnyy'}},
        {id: 1, photoUrl:"https://iconarchive.com/show/free-space-icons-by-goodstuff-no-nonsense/rick-icon.html",
            followed: true, fullName: 'Sergei', status: 'Hey Rustam! ', location:{country: 'Kazakhstan', city: 'Rudnyy'}},
        {id: 2, photoUrl:"https://iconarchive.com/show/free-space-icons-by-goodstuff-no-nonsense/rick-icon.html"
            ,followed: false, fullName: 'Adele', status: 'What happened?', location:{country: 'Kazakhstan', city: 'Rudnyy'}},
    ],
    newUser: 'ffffff'
};

const reducerUsers = (state=initialState, action) => {

    switch (action.type) {
        case FOLLOW:{
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (user) => ({type: SET_USERS, user});

export default reducerUsers;