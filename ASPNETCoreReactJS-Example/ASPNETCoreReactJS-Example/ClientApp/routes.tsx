import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Register } from './components/users/Register';
import { Users } from './components/users/Users';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={Users} />
    <Route path='/register' component={Register} />
</Layout>;