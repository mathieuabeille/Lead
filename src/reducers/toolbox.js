export default function (state, action) {
    if (state === undefined) {
    return [];
}
    switch(action.type) {
        case 'FETCH_TOOLS':
            return action.payload;
        default:
            return state;
    }
}
