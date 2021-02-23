export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';

export const toggleHappy = (happy) => {
    return {type: TOGGLE_HAPPY, payload: happy};
};