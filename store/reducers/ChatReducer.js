import { TOGGLE_HAPPY } from './../ChatActions';
// import from dummy data to access chat

const initialState = {
    happy: false,
    // chats: [],
    //...
}

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HAPPY:
            return {
                ...state, 
                happy: !state.happy
            }
 
        // case NEW_CHAT:
            //

        default:
            return state;
    }
}


export default ChatReducer;