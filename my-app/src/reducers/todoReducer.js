import {
    FETCH_TODO,
    CREATE_TODO,
    READ_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../constants/actions/todoActions';
import todoState from '../constants/state/todoState';

export default (state = todoState, action = {}) => {
    const { type, description, done, id } = action;
    switch (type) {
        case FETCH_TODO:
            return {};
        case CREATE_TODO:
            return {...state, [id]: {description, done}};
        case READ_TODO:
            return {};
        case UPDATE_TODO:
            return {
                ...state,
                [id]: { description, done }
            };
        case DELETE_TODO:
            const stateDeleted = {...state};
            delete stateDeleted[id];
            return stateDeleted;
        default:
            return state;
    }
};

