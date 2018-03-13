/* global describe, it, expect */
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Engine } from '../Engine';
import { Switch } from 'react-router-dom';
import { NotFound } from '../NotFound';
import { Welcome } from '../Welcome';

it('Engine component renders as expected', () => {
    // arrange
    const context = { id: 1, done: false, description: 'my desc' };
    // act
    const shallowRenderer = new ReactShallowRenderer();
    const engine = shallowRenderer.render(<Engine />);
    const div = engine.props.children;
    const router = div.props.children;

    const [
        RouteHome,
        RouteTodo,
        RouteSomePath,
        RouteSomePath2,
        RedirectHome,
        RouteNotFound
    ] = router.props.children;
    // assert
    expect(router.type).toEqual(Switch);
    expect(RouteHome.props).toEqual({ path: '/home', component: Welcome });
    expect(RouteTodo.props.path).toEqual('/todo');
    expect(RouteSomePath.props).toEqual({ path: '/somePath', component: Welcome });
    expect(RouteSomePath2.props).toEqual({ path: '/somePath2', component: Welcome });
    expect(RedirectHome.props).toEqual({ exact: true, from: '/', push: false, to: '/home' });
    expect(RouteNotFound.props).toEqual({ component: NotFound });
});
