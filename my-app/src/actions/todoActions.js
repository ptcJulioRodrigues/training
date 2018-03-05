import {UPDATE_TODO} from '../constants/actions/todoActions';

export const updateTodoAC = (description, done, id) => ({
    type: UPDATE_TODO,
    description,
    done,
    id
});