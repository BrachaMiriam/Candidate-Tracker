import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import  Layout from './Layout';
import  Home  from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import { CandidateContextComponent } from './CandidateContext';
import Details from './components/Details';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <CandidateContextComponent>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/AddCandidate' component={AddCandidate} />
        <Route exact path='/Pending' component={Pending} />
        <Route exact path='/Confirmed' component={Confirmed} />
        <Route exact path='/Refused' component={Refused} />
        <Route exact path='/Details/:id' component={Details} />
      </Layout>
      </CandidateContextComponent>
    );
  }
}
