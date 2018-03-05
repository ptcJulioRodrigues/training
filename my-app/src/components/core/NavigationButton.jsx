import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NavigationButton extends Component {
    render() {
        const { name, path } = this.props;
        return (
            <div className="LONavigationButton">
                <li className="dropdown user user-menu">
                    <a href={ path } className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-search fa-fw" />
                        <span className="hidden-xs">{name}</span>
                    </a>
                </li>
            </div>
        );
    }
}

NavigationButton.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string
};

export default NavigationButton;

