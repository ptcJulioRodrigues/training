import {UPDATE_TODO} from '../constants/actions/todoActions';

export const updateTodo = (description, done, id) => ({
    type: UPDATE_TODO,
    description,
    done,
    id
});