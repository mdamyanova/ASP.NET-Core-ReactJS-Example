import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { isLoggedIn, getUser } from '../utils/helpers';
import { logout } from './users/Logout';

export class NavMenu extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        let auth = isLoggedIn()
            ?
            <Nav pullRight>
                {/*TODO: getUser can go to user profile page :)*/}
                <NavItem eventKey={1}>{`${getUser()}`}</NavItem>
                <NavItem eventKey={2} onClick={logout}>Logout</NavItem>
            </Nav>
            : <Nav pullRight>
                <NavItem eventKey={1} href="/login">Login</NavItem>
                <NavItem eventKey={2} href="/register">Register</NavItem>
            </Nav>
        let example = isLoggedIn()
            ?
            <Nav>
                <NavItem eventKey={1} href="/users">Users</NavItem>
                <NavItem eventKey={2} href="/example">Example</NavItem>
                <NavItem eventKey={3} href="/about">About</NavItem>
            </Nav> 
            : <Nav>
                <NavItem eventKey={1} href="/users">Users</NavItem>
                <NavItem eventKey={2} href="/about">About</NavItem>
            </Nav>

        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">ASP.NET Core ReactJS</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    { example }
                    { auth }
            </Navbar.Collapse>
            </Navbar>
        );
    }
}