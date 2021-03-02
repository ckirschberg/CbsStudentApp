export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const toggleHappy = (happy) => {
    return {type: TOGGLE_HAPPY, payload: happy};
};

export const newMessage = (roomId, message) => {
    return { type: NEW_MESSAGE, payload: {roomId, message}};
}

export const deleteMessage = (roomId, messageId) => {
    return { type: DELETE_MESSAGE, payload: {roomId, messageId}};
}