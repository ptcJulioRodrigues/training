export default (state = [], action = {}) => {
    switch (action.type) {
        case 'FETCH':
            console.log(action);
            return [...action.data];
        default:
            return state;
    }
};