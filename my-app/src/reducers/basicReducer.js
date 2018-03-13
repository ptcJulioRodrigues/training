import baseState from '../constants/state/baseState';
import { BASIC } from '../constants/actions/basicActions';

const basicReducer = (state = baseState, action = {}) => {
    switch (action.type) {
        case BASIC:
            return {};
        default:
            return state;
    }
};

export default basicReducer;
