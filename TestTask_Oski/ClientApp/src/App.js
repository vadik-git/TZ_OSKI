import React, { Component } from 'react';

import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Login  from './components/login';
import Test from './components/TestComponent/Test';
import  Question  from './components/QuestionComponent/Question'
import './custom.css';

export default class App extends Component {
  static displayName = App.name;
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Test} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/question' component={Question} />
      </Layout>
    );
  }
}
