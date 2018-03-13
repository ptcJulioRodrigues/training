/* global describe, it, expect */
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Todos, mapStateToProps } from '../Todos';

it('Todos component renders as expected', () => {
    // arrange
    const context = { todos: [1, 2] };
    // act
    const shallowRenderer = new ReactShallowRenderer();
    const todos = shallowRenderer.render(<Todos {...context} />);
    // assert
    expect(todos.props.children.length).toEqual(2);
    expect(todos.props.children[0].type.displayName).toEqual('Connect(Todo)');
    expect(todos.props.children[1].type.displayName).toEqual('Connect(Todo)');
});

describe('calling mapStateToProps', () => {
    const myState = { todo: { 1: { description: 'description for id 1', done: false }, 209: { description: 'description for id 1', done: false } } };
    it('should collect done and description from state', () => {
        //arrange
        const expected = { todos: ["1", "209"] };
        //act
        const result = mapStateToProps(myState);
        //assert
        expect(result).toEqual(expected);
    });
});

