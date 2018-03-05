import baseState from '../constants/state/baseState';
import { BASIC } from '../constants/actions/basicActions';

const basicReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case BASIC:
            return {};
        default:
            return {};
    }
};

export default basicReducer;
