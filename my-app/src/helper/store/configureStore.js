import { createStore, combineReducers } from 'redux';
import { filterActions } from 'redux-ignore';
import basicReducer from '../../reducers/basicReducer';
import todoReduce from '../../reducers/todoReducer';
import * as todoActions from '../../constants/actions/todoActions';
import * as basicActions from '../../constants/actions/basicActions';
import defaultState from '../../constants/state/defaultState';

const rootReducer = combineReducers({
    base: filterActions(basicReducer, Object.keys(basicActions)),
    todo: filterActions(todoReduce, Object.keys(todoActions))
    });

const store = (initialState = defaultState) => createStore(rootReducer, initialState);

export default store;
