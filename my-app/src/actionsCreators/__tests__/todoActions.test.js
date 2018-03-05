/* global it, expect */
import { updateTodo } from '../todoActions';
import { UPDATE_TODO } from '../../constants/actions/actions';

it('should return an with the correct values', () => {
    //arrange
    const expectedState = { type: UPDATE_TODO, description: 'my description', done: true, id: 1 };
    //act
    const actualResult = updateTodo('my description', true, 1);
    //assert
    expect(actualResult).toEqual(expectedState);
});
