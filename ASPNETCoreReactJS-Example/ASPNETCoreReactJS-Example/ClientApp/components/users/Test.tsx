import * as React from "react";
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { request } from "../../utils/request";
import { Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';
import { render } from "react-dom";

interface HandleNameChangeInterface {
    target: HTMLInputElement;
}

interface RegisterState {
    userName: string,
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
};

// todo - props are wrongs
export class Register extends React.Component<RouteComponentProps<{}>, RegisterState> {
    constructor() {
        super();
        this.registerUser = this.registerUser.bind(this);
        this.prepareFormDataForSubmission = this.prepareFormDataForSubmission.bind(this);
        this.change = this.change.bind(this);
    }

    change(event: HandleNameChangeInterface) {
        this.setState({ userName: event.target.value });
    }

    prepareFormDataForSubmission(data = this.state) {
        return {
            UserName: data.userName,
            FullName: data.fullName,
            Email: data.email,
            Password: data.password,
            ConfirmPassword: data.confirmPassword
        };
    }

    registerUser(event: React.FormEvent<HTMLFormElement>) {
        return <div>lll</div>;
    }

    public render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalUserName">
                    <Col componentClass={ControlLabel} sm={2}>Username</Col>
                    <Col sm={2}>
                        <input type="text" className="form-control" placeholder="Username" onChange={this.change} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalFullName">
                    <Col componentClass={ControlLabel} sm={2}>Full Name</Col>
                    <Col sm={2}>
                        <FormControl type="text" placeholder="Full Name" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>Email</Col>
                    <Col sm={2}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                    <Col sm={2}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>Confirm Password</Col>
                    <Col sm={2}>
                        <FormControl type="password" placeholder="Confirm Password" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Register</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}