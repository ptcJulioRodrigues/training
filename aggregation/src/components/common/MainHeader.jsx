import React, { Component } from 'react';
import { Nav, NavbarBrand } from 'reactstrap';
import NavigationButton from './NavigationButton';
import 'bootstrap/dist/css/bootstrap.css';

export class MainHeader extends Component {
    render() {
        return (
            <Nav className="navbar-nav flex-row">
                <NavbarBrand href="/">JDCR</NavbarBrand>
                <NavigationButton name={'home'} path={'#/home'} />
                <NavigationButton name={'notes'} path={'#/notes'} />
            </Nav>
        );
    }
}

export default MainHeader;

