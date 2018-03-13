/* global it, expect */
import basicReducer from '../basicReducer';
import { BASIC }
    from '../../constants/actions/actions';

const initialState = { name: 'John Doe' };
it('should return State when receive action of unknown type', () => {
    //arrange
    const expectedState = initialState;
    const sentAction = { type: '' };
    //act
    const actualResult = basicReducer(initialState, sentAction);
    //assert
    expect(actualResult).toEqual(expectedState);
});

it('should return an empty State when receive action of type BASIC', () => {
    //arrange
    const expectedState = {};
    const sentAction = { type: BASIC };
    //act
    const actualResult = basicReducer(initialState, sentAction);
    //assert
    expect(actualResult).toEqual(expectedState);
});
