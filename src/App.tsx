import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import RegistrationForm from './components/registration-form/registration-form';
import Article from './page/article';
import Home from './page/home';
import Login from './page/login';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <RegistrationForm />
        </Route>
        <Route exact path="/article/:articleId">
          <Article />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
