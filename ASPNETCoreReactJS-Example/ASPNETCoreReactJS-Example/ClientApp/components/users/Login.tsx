//import * as React from 'react';
//import { Redirect } from 'react-router';
//import { setAccessToken, setUserId, setUser, isLoggedIn } from '../utils';

//// todo fix this
//class Login extends React.Component<any, any> {
//    constructor(props) {
//        super(props);

//        this.login = this.login.bind(this);
//        this.onFormValueChange = this.onFormValueChange.bind(this);

//        this.state = {
//            email: '',
//            password: '',
//            loggedIn: isLoggedIn(),
//        };
//    }

//    login(e) {
//        e.preventDefault();
//        const { email, password } = this.state;

//        fetch("/token", {
//            method: "POST",
//            Headers: {
//                "Content-Type": "application/x-www-form-urlencoded"
//            },
//            body: `grant_type=password&username=${email}&password=${password}`
//        })
//            .then((response) => {
//                if (!response.ok) {
//                    throw new Error(response.status);
//                }

//                return response.json();
//            })
//            .then((response) => {
//                setAccessToken(response.access_token);
//                setUser(response.FullName);
//                setUserId(response.UserId);
//            })
//            .then(() => this.setState({ loggedIn: true }))
//            .catch(error => console.error(error));
//    }

//    onFormValueChange({ target }) {
//        this.setState({
//            [target.id]: target.value
//        });
//    }

//    render() {
//        if (this.state.loggedIn) {
//            return <Redirect to="/" />;
//        }

//        return (
//            <div className="login-view">
//                <h2>Login:</h2>

//                <form onSubmit={this.login}>
//                    <div>
//                        <label htmlFor="email">Email:</label>
//                        <input
//                            type="email"
//                            id="email"
//                            onChange={this.onFormValueChange}
//                            required
//                        />
//                    </div>

//                    <div>
//                        <label htmlFor="password">Password:</label>
//                        <input
//                            type="password"
//                            id="password"
//                            onChange={this.onFormValueChange}
//                            min="5"
//                            required
//                        />
//                    </div>

//                    <button type="submit">Submit</button>
//                </form>
//            </div>
//        );
//    }
//}