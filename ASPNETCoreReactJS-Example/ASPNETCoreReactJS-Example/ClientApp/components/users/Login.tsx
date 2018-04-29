import * as React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, Col, Grid, Row } from 'react-bootstrap';
import 'isomorphic-fetch';

export class Login extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.prepareFormData = this.prepareFormData.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
    }

    handleOnChange(event: any): void {
        this.setState({ [event.target.id]: event.target.value, errors: [] });
    }

    prepareFormData(data = this.state) {
        return {
            UserName: data.userName.trim(),
            Password: data.password.trim()
        };
    }

    loginUser(event: React.FormEvent<HTMLFormElement>) {
        // When pressing Enter, the page shouldn't reload
        event.preventDefault();

        var data = JSON.stringify(this.prepareFormData());

        fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: data
        })
            .then(this.checkStatus);
    }

    checkStatus(res: any): void {
        if (res.status >= 200 && res.status < 300) {
            this.props.history.push('/example');
        } else {
            let error = new Error(res.statusTest);
            console.log(error);
            this.props.history.push('/error');
        }
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <form onSubmit={this.loginUser}>
                            <Form horizontal>
                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>Username</Col>
                                    <Col sm={5}>
                                        <FormControl type="text" placeholder="Username" id="userName" onChange={this.handleOnChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                                    <Col sm={5}>
                                        <FormControl type="password" placeholder="Password" id="password" onChange={this.handleOnChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Button type="submit">Login</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </form>
                    </Col>
                    <Col xs={6} md={4}>
                        <FormGroup>
                            <FormControl.Static>Hello, {this.state.userName}</FormControl.Static>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>);
    }
}