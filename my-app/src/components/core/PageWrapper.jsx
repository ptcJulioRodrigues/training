import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainHeader from './MainHeader';


export class PageWrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <MainHeader />
                <div className="content-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageWrapper;