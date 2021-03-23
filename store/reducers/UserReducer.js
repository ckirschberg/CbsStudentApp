import User from '../../models/User';
import { SAVE_USER, SIGNUP } from '../UserActions';
import { USERS } from './../../data/dummy-data';

const initialState = {
    loggedInUser: null,
    idToken: null,
    // email: ''
    //...
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
        {
            return { ...state, 
                loggedInUser: new User(action.payload.localId, '', action.payload.email, '', '', false), 
                idToken: action.payload.idToken 
            };
        }

        case SAVE_USER:
        {
            return {
                ...state,
                loggedInUser: action.payload
            }
        }
        // case TOGGLE_HAPPY:
        //     return {
        //         ...state, 
        //         happy: !state.happy
        //     }
 
        // case NEW_CHAT:
            //

        default:
            return state;
    }
}


export default UserReducer;