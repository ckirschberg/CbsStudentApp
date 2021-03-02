import { ADD_TO_TEST, TOGGLE_HAPPY, NEW_CHATMESSAGE } from './../ChatActions';
// import from dummy data to access chat
import { CHATROOM } from './../../data/dummy-data';

const initialState = {
    happy: false,
    test: ['Hi', 'There'],
    chatrooms: CHATROOM,
    //...
}

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        // Call a new action creator, that you create, when clicking the button. Pass relevant info. in payload.
        // 1: find the right chatroom in the array and copy the chatmessages array.
        case NEW_CHATMESSAGE:
            const chatroom = state.chatrooms.find(room => room.id === action.payload.chatroomId);
            const chatmessages = [...chatroom.chatMessages, action.payload.message];


            // 2: Copy chatroom object and attach new chat array that you copied.

            //3: Insert the new chatroom

            return state;




        


        case ADD_TO_TEST: 
            console.log("reducer "+ action.payload);
            // Adds the new value to the array, but without making state mutations.
            return {
                ...state,
                test: [...state.test, action.payload]
            }

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