import User from './../models/User';
import ChatMessage from './../models/ChatMessage';
import ChatRoom from './../models/ChatRoom';

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const ADD_TO_TEST = 'ADD_TO_TEST';
export const NEW_CHATMESSAGE = 'NEW_CHATMESSAGE';

export const NEW_CHATROOM = 'NEW_CHATROOM';

export const toggleHappy = (happy) => {
    return {type: TOGGLE_HAPPY, payload: happy};
};

export const addToTest = (text) => {
    console.log("text " + text);
    return {type: ADD_TO_TEST, payload: text};
};

export const addToChats = (text, chatroomId) => {
    const tempUser = new User('1','Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true);
    const message = new ChatMessage(Math.random().toString(), new Date(), text, tempUser);

    return {type: NEW_CHATMESSAGE, payload: {message, chatroomId }};
};

export const createChatroom = (chatroomName) => {
    return async (dispatch, getState) => {

        let chatroom = new ChatRoom('', new Date(), chatroomName, []);
        const token = getState().user.idToken;
        console.log("token");
        console.log(token);
        

        const response = await fetch(
            // get url from your! firebase realtime database.

            // to save a chat message in a chat room:
            //https://cbsstudents-38267-default-rtdb.firebaseio.com/chatrooms/<chatroom_id>/chatMessages.json?auth=' + token, {
            'https://cbsstudents-38267-default-rtdb.firebaseio.com/chatrooms.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                name: chatroom.name,
                createdDate: chatroom.createdDate,
                chatMessages: chatroom.chatMessages
            })
        });
  
        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {
            chatroom.id = data.name;
            dispatch({type: NEW_CHATROOM, payload: chatroom });
        }
    };

    // return { type: NEW_CHATROOM, payload: chatroomName };
};