import { USERS } from './../../data/dummy-data';

const initialState = {
    loggedInUser: USERS[0]
    //...
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        
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