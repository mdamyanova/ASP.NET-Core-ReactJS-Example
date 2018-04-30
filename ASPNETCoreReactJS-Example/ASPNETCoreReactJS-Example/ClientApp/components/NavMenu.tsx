import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { isLoggedIn, getUser, removeAccessToken } from '../utils/helpers';

export class NavMenu extends React.Component<{}, {}> {
    constructor() {
        super();

        this.logout = this.logout.bind(this);
    }

    logout() {
        removeAccessToken();
        window.location.hash = '/';
    }

    render() {
        let content = isLoggedIn()
            ?
            <Nav pullRight>
                {/*TODO: getUser can go to user profile page :)*/}
                <NavItem eventKey={1}>{`${getUser()}`}</NavItem>
                <NavItem eventKey={2} onClick={this.logout}>Logout</NavItem>
            </Nav>
            : <Nav pullRight>
                <NavItem eventKey={1} href="/login">Login</NavItem>
                <NavItem eventKey={2} href="/register">Register</NavItem>
            </Nav>
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">ASP.NET Core with ReactJS</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/users">Users</NavItem>
                        <NavItem eventKey={2} href="/about">About</NavItem>
                    </Nav>
                    { content }
            </Navbar.Collapse>
            </Navbar>
        );
    }
}