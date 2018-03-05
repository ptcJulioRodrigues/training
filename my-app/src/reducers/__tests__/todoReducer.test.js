/* global it, expect */
import todoReducer from '../todoReducer';
import { FETCH_TODO, CREATE_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO }
from '../../constants/actions/actions';

const initialState = { 1: { description: '', done: false }, 2: { description: '', done: false } };
it('should return an empty State when receive action of type FETCH_TODO', () => {
    //arrange
    const expectedState = {};
    const sentAction = { type: FETCH_TODO, description: 'some description', done: false, id: 1 };
    //act
    const actualResult = todoReducer(initialState, sentAction);
    //assert
    expect(actualResult).toEqual(expectedState);
});

it('should return an empty State when receive action of type CREATE_TODO', () => {
    //arrange
    const expectedState = {};
    const sentAction = { type: CREATE_TODO, description: 'some description', done: false, id: 1 };
    //act
    const actualResult = todoReducer(initialState, sentAction);
    //assert
    expect(actualResult).toEqual(expectedState);
});

it('should return an empty State when receive action of type READ_TODO', () => {
    //arrange
    const expectedState = {};
    const sentAction = { type: READ_TODO, description: 'some description', done: false, id: 1 };
    //act
    const actualResult = todoReducer(initialState, sentAction);
    //assert
    expect(actualResult).toEqual(expectedState);
});

it('should return an empty State when receive action of type DELETE_TODO', () => {
    //arrange
    const expectedState = {};
    const sentAction = { type: DELETE_TODO, description: 'some description', done: false, id: 1 };
    //act
    const actualResult = todoReducer(initialState, sentAction);
    //assert
    expect(actualResult).toEqual(expectedState);
});

it('should return an empty State when receive action of type UPDATE_TODO', () => {
    //arrange
    const expectedState = { 1: { description: 'some description', done: false }, 2: { description: '', done: false } };
    const sentAction = { type: UPDATE_TODO, description: 'some description', done: false, id: 1 };
    //act
    const actualResult = todoReducer(initialState, sentAction);
    //assert
    expect(actualResult).toEqual(expectedState);
});