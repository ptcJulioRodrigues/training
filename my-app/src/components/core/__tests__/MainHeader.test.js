/* global describe, it, expect */
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { MainHeader } from '../MainHeader';
import { NavigationButton } from '../NavigationButton';

it('MainHeader component renders as expected', () => {
    // arrange
    // act
    const shallowRenderer = new ReactShallowRenderer();
    const mainHeader = shallowRenderer.render(<MainHeader />);

    const nav = mainHeader.props.children;
    const ul = nav.props.children;
    // assert
    expect(nav.type).toEqual('nav');
    expect(ul.type).toEqual('ul');

    expect(ul.props.children.length).toEqual(2);
    expect(ul.props.children[0].type).toEqual(NavigationButton);
    expect(ul.props.children[1].type).toEqual(NavigationButton);
});