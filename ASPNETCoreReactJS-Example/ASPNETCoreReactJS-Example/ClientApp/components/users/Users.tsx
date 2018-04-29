import * as React from 'react';
import 'isomorphic-fetch';
import { RouteComponentProps } from 'react-router';
import { Table } from 'react-bootstrap';

interface UsersList {
    userName: string;
    fullName: string;
    email: string;
}

export class Users extends React.Component<RouteComponentProps<{}>, any> {
    constructor() {
        super();
        this.state = { users: [], loading: true };

        // Send GET request for listing all users
        fetch('api/users/all')
            .then(response => response.json() as Promise<UsersList[]>)
            .then(data => {
                this.setState({ users: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p>Loading...</p>
            : Users.renderTable(this.state.users);

        return <div>
            <h1>Users</h1>
            <p>Here are our users. ;)</p>
            { contents }
        </div>;
    }

    private static renderTable(users: UsersList[]) {
        if (users == undefined || users.length == 0) {
            return <p>Sorry, no users.</p>;
        }

        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Full name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.userName}>
                            <td>{user.userName}</td>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
}