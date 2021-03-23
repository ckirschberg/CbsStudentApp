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
            return { ...state, /* We would like to save a user object and also the token */ };

        case SAVE_USER:
            return {
                ...state,
                loggedInUser: action.payload
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