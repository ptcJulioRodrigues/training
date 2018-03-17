import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { filterActions } from 'redux-ignore';
import basicReducer from '../../reducers/basicReducer';
import todoReduce from '../../reducers/todoReducer';
import contactsReduce from '../../reducers/contactsReduce';
import * as todoActions from '../../constants/actions/todoActions';
import * as basicActions from '../../constants/actions/basicActions';
import defaultState from '../../constants/state/defaultState';

const rootReducer = combineReducers({
    base: filterActions(basicReducer, Object.keys(basicActions)),
    todo: filterActions(todoReduce, Object.keys(todoActions)),
    contacts: filterActions(contactsReduce, 'FETCH')
    });

const store = (initialState = defaultState) =>
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    );

export default store;
