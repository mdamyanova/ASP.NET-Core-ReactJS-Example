import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Register } from './components/users/Register';
import { Login } from './components/users/Login';
import { Users } from './components/users/Users';
import { Error } from './components/Error';
import { Example } from './components/Example';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={Users} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/error' component={Error} />
    <Route path='/example' component={Example} />
</Layout>;