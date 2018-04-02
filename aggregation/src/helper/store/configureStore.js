import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { filterActions } from 'redux-ignore';
import * as noteActions from '../../constants/actions/notes';
import notesReducer from '../../reducer/notesReducer';

const rootReducer = combineReducers({
    notes: filterActions(notesReducer, Object.keys(noteActions))
    });

const store = (initialState = {}) =>
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    );

export default store;
