import {
    FETCH_TODO,
    CREATE_TODO,
    READ_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../constants/actions/todoActions';
import todoState from '../constants/state/todoState';

export default (state = todoState, action = {}) => {
    switch (action.type) {
        case FETCH_TODO:
            return {};
        case CREATE_TODO:
            return {};
        case READ_TODO:
            return {};
        case UPDATE_TODO:
            const { description, done, id } = action;
            const updatedTodo = {};
            updatedTodo[id] = { description, done };
            return {
                ...state,
                ...updatedTodo
            };
        case
        DELETE_TODO:
            return {};
        default:
            return {};
    }
};

