import { CREATE_NOTE, EDIT_NOTE, DELETE_NOTE } from '../constants/actions/notes';

const notesReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case CREATE_NOTE:
        case EDIT_NOTE:
        case DELETE_NOTE:
        default:
            return state;
    }
};

export default notesReducer;
