import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Blockchain from './components/App';
import ConductTransaction from './components/ConductTransaction';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TransactionPool from './components/TransactionPool';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/blockchain' component={Blockchain} />
        <Route path='/conduct-transaction' component={ConductTransaction} />
        <Route path='/transaction-pool' component={TransactionPool} />
      </Switch>
    </Router>,
  document.getElementById('root')
);