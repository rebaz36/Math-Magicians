/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Calculator from './component/Calculator';
import Layout from './component/Layout/Layout';

export default function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Calculator} />
    //   </Switch>
    // </Router>
    <Layout />
  );
}
