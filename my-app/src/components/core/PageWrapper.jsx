import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainHeader from './MainHeader';
import Dimensions from 'react-dimensions';

export class PageWrapper extends Component {

    getChildContext() {
        return {
            pageWrapperHeight: this.props.containerHeight
        };
    }

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
    containerHeight: PropTypes.number
};

PageWrapper.childContextTypes = {
    pageWrapperHeight: PropTypes.number
};

export default Dimensions()(PageWrapper);