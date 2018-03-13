/* global describe, it, expect */
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { MainHeader } from '../MainHeader';
import { NavigationButton } from '../NavigationButton';

it('NavigationButton component renders as expected', () => {
    // arrange
    const context = { name: 'hey I`m a button', path: 'this is a path' };
    // act
    const shallowRenderer = new ReactShallowRenderer();
    const navigationButton = shallowRenderer.render(<NavigationButton {...context} />);

    const li = navigationButton.props.children;
    const a = li.props.children;
    // assert
    expect(li.type).toEqual('li');
    expect(a.type).toEqual('a');

    expect(a.props.children.length).toEqual(2);
    expect(a.props.children[0].type).toEqual('i');
    expect(a.props.children[1].type).toEqual('span');
});