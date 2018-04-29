import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export class NavMenu extends React.Component<{}, {}> {     
    render() {
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
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/login">Login</NavItem>
                        <NavItem eventKey={2} href="/register">Register</NavItem>
                    </Nav>;
            </Navbar.Collapse>
            </Navbar>
        );
    }
}