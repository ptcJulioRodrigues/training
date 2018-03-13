/* global it, expect */
import configureStore from '../configureStore';

it('use default state if no arguments passed', () => {
    const persistedState = configureStore().getState();

    expect(persistedState.base.name).toEqual('John Doe');
    expect(persistedState.todo).toEqual({
        1: { description: 'some description', done: false },
        4: { description: 'other description', done: false }
    });
});

it('persists state correctly', () => {
    const state = {
        base: { name: 'Jorge' },
        todo: { 11: { description: 'New description', done: false } }
    };

    const persistedState = configureStore(state).getState();

    expect(persistedState.base.name).toEqual('Jorge');
    expect(persistedState.todo).toEqual({ 11: { description: 'New description', done: false } });
});