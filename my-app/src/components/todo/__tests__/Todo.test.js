/* global describe, it, expect */
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Todo, mapStateToProps, mapDispatchToProps } from '../Todo';

it('Todo component renders as expected', () => {
    // arrange
    const context = { id: 1, done: false, description: 'my desc' };
    // act
    const shallowRenderer = new ReactShallowRenderer();
    const todo = shallowRenderer.render(<Todo {...context} />);
    // assert
    expect(todo.props.children.length).toEqual(3);
    expect(todo.props.children[0].type).toEqual('h2');

    expect(todo.props.children[1].props.type).toEqual('checkbox');
    expect(todo.props.children[1].props.checked).toEqual(false);

    expect(todo.props.children[2].type).toEqual('textarea');
    expect(todo.props.children[2].props.value).toEqual('my desc');
});

describe('calling mapStateToProps', () => {
    const myState = { todo: { 1: { description: 'description for id 1', done: false } , 209: { description: 'description for id 1', done: false }} };
    const ownProps = { id: 209 };
    it('should collect done and description from state', () => {
        //arrange
        const expected = { description: 'description for id 1', done: false };
        //act
        const result = mapStateToProps(myState, ownProps);
        //assert
        expect(result).toEqual(expected);
    });
});

describe('mapDispatchToProps', () => {
    it('should expose dispatchEdit function', () => {
        //arrange
        const expectedAction = {description: 'desc', done: true, id: 1, type: 'UPDATE_TODO'};
        const dispachMock = jest.fn();
        //act
        const result = mapDispatchToProps(dispachMock);
        result.dispatchEdit('desc', true, 1);
        //assert
        expect(typeof result.dispatchEdit).toBe('function');
        expect(dispachMock.mock.calls.length).toBe(1);
        expect(dispachMock.mock.calls[0][0]).toEqual(expectedAction);
    });
});