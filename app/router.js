import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import AppLayout from './components/AppLayout';
import NotFoundPage from './components/NotFoundPage';
import Home from './features/Home';
import Heroes from './features/Heroes';
import Cities from './features/Cities';
import RealEstates from './features/RealEstates';
import CountersPage from './features/CountersPage';
import About from './features/About';
import GeneratorsPage from './features/GeneratorsPage';

const headerLinks = [
  {path: "/", label: "Home"},
  {path: "/heroes", label: "Heroes"},
  {path: "/cities", label: "Cities"},
  {path: "/real-estates", label: "Real Estates"},
  {path: "/counters", label: "Counters"},
  {path: "/about", label: "About"},
  {path: "/generators", label: "Generators"}
];

const AppRouter = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <AppLayout headerLinks={headerLinks}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/heroes" component={Heroes}/>
          <Route path="/about" component={About}/>
          <Route path="/generators" component={GeneratorsPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  );
};

export default AppRouter;
