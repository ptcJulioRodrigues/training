import React, { Component } from 'react';
import NavigationButton from './NavigationButton';

export class MainHeader extends Component {
    render() {
        return (
            <div className="MainHeader">
                <nav className="navbar navbar-static-top" >
                    <ul className="nav navbar-nav">
                        <NavigationButton name={'home'} path={'#/home'} />
                        <NavigationButton name={'todo'} path={'#/todo'} />
                        <NavigationButton name={'contacts'} path={'#/contacts'} />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default MainHeader;

