import React, { Component } from 'react';
import { NavLink, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

export class NavigationButton extends Component {
    render() {
        const { name, path } = this.props;
        return (
            <NavItem>
                <NavLink href={path}>{name}</NavLink>
            </NavItem>
        );
    }
}

NavigationButton.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string
};

export default NavigationButton;

