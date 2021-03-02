import { TOGGLE_HAPPY, NEW_MESSAGE, DELETE_MESSAGE } from './../ChatActions';
import { CHATROOM } from './../../data/dummy-data'; // import from dummy data to access chat

const initialState = {
    happy: false,
    chatrooms: CHATROOM,
    //...
}

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            const deleteChatArray = state.chatrooms.find(room => room.id === action.payload.roomId).chatMessages
                .filter(message => message.id !== action.payload.messageId);
            
            const deleteChatRoom = {...state.chatrooms.find(room => room.id === action.payload.roomId)};
            deleteChatRoom.chatMessages = deleteChatArray;

            const chatroomIndexDelete = state.chatrooms.findIndex(room => room.id === action.payload.roomId);
            const deleteRoomArray = [...state.chatrooms];
            deleteRoomArray.splice(chatroomIndexDelete, 1, deleteChatRoom);

            return {
                ...state,
                chatrooms: deleteRoomArray
            };

        case NEW_MESSAGE:
            // first find the right chatroom and copy the chatmessages array while inserting the new message
            const chatroom = state.chatrooms.find(room => room.id === action.payload.roomId);
            const newChatArray = [...chatroom.chatMessages, action.payload.message];
            
            // Now, to create a new chatRoom object with the new chatarray, we copy the chatroom
            // and attach the messages. Now we have a new chat room object to insert.
            const newChatRoom = {...chatroom}; // copy chatroom object
            newChatRoom.chatMessages = newChatArray;

            // now insert the newChatRoom object into the array of chatrooms.
            const chatroomIndex = state.chatrooms.findIndex(room => room.id === action.payload.roomId);

            // copy the chatrooms array and "splice" the new object into the right position, using
            // index of the chatroom, 1, newChatRoom as parameters.
            const newRoomArray = [...state.chatrooms];
            newRoomArray.splice(chatroomIndex, 1, newChatRoom);

            return {
                ...state,
                chatrooms: newRoomArray
            };

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