import * as React from "react";
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button, Col, Grid, Row } from 'react-bootstrap';
import 'isomorphic-fetch';
import index from "popper.js";

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

export class Register extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userName: '',
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    public handleOnChange(event: any): void {
        this.setState({ [event.target.id]: event.target.value });
    } 

    private registerUser(event: React.FormEvent<HTMLFormElement>) {
        // When pressing Enter, the page shouldn't reload
        event.preventDefault();

        var data = {
            UserName: this.state.userName,
            FullName: this.state.fullName,
            Email: this.state.email,
            Password: this.state.password,
            ConfirmPassword: this.state.confirmPassword
        };

        fetch('api/users/register', {
            method: 'post',
            body: JSON.stringify(data), // post body 
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(() => this.props.history.push("/login"))
            .catch(error => console.error(error));
    }

    public render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <form onSubmit={this.registerUser}>
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>Username</Col>
                                <Col sm={5}>
                                    <FormControl type="text" placeholder="Username" id="userName" onChange={this.handleOnChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>Full Name</Col>
                                <Col sm={5}>
                                    <FormControl type="text" placeholder="Full Name" id="fullName" onChange={this.handleOnChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>Email</Col>
                                <Col sm={5}>
                                    <FormControl type="email" placeholder="Email" id="email" onChange={this.handleOnChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>Password</Col>
                                <Col sm={5}>
                                    <FormControl type="password" placeholder="Password" id="password" onChange={this.handleOnChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>Confirm Password</Col>
                                <Col sm={5}>
                                    <FormControl type="password" pattern={this.state.password} placeholder="Confirm Password" id="confirmPassword" onChange={this.handleOnChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">Register</Button>
                                </Col>
                            </FormGroup>
                            </Form>
                        </form>
                    </Col>
                    <Col xs={6} md={4}>
                        <FormGroup>                        
                                <ControlLabel>Hello, stranger! Are you ok with this info:</ControlLabel>
                                <FormControl.Static>Username: {this.state.userName}</FormControl.Static>
                                <FormControl.Static> Full Name: {this.state.fullName}</FormControl.Static>
                                <FormControl.Static>Email: {this.state.email}</FormControl.Static>                  
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>);
        
    //

    //public render() {

    //    return (
    //        <Form horizontal>
    //            <FormGroup controlId="formHorizontalUserName">
    //                <Col componentClass={ControlLabel} sm={2}>Username</Col>
    //                <Col sm={2}>
    //                    <input type="text" placeholder="Username" onChange={this.changeUserName} />
    //                </Col>
    //            </FormGroup>
    //            <FormGroup controlId="formHorizontalFullName">
    //                <Col componentClass={ControlLabel} sm={2}>Full Name</Col>
    //                <Col sm={2}>
    //                    <input type="text" placeholder="Full Name" onChange={this.changeFullName} />
    //                </Col>
    //            </FormGroup>
    //            <FormGroup controlId="formHorizontalEmail">
    //                <Col componentClass={ControlLabel} sm={2}>Email</Col>
    //                <Col sm={2}>
    //                    <input type="email" placeholder="Email" onChange={this.changeEmail} />
    //                </Col>
    //            </FormGroup>
    //            <FormGroup controlId="formHorizontalPassword">
    //                <Col componentClass={ControlLabel} sm={2}>Password</Col>
    //                <Col sm={2}>
    //                    <input type="password" placeholder="Password" onChange={this.changePassword} />
    //                </Col>
    //            </FormGroup>
    //            <FormGroup controlId="formHorizontalPassword">
    //                <Col componentClass={ControlLabel} sm={2}>Confirm Password</Col>
    //                <Col sm={2}>
    //                    <input type="password" placeholder="Confirm Password" onChange={this.changeConfirmPassword} />
    //                </Col>
    //            </FormGroup>
    //            <FormGroup>
    //                <Col smOffset={2} sm={10}>
    //                    <Button type="submit">Register</Button>
    //                </Col>
    //            </FormGroup>
    //        </Form>
    //    );
    }
}