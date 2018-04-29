import * as React from 'react';
import { Route } from 'react-router-dom';

// import our main pages
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Error } from './components/Error';

// import our users pages
import { Users } from './components/users/Users';
import { Login } from './components/users/Login';
import { Register } from './components/users/Register';
import { Example } from './components/Example';

// route our components
export const routes =
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/error' component={Error} />

        <Route path='/users' component={Users} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/example' component={Example} />
    </Layout>;