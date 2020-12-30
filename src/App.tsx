import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getPostsData } from './store/blogPosts/action';
import Header from './components/header/header';
import ArticlePage from './page/article-page';
import Home from './page/home';
import Login from './page/login';
import Registration from './page/registration';
import { usersData } from './data/users';

const App: FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const localUsers = JSON.parse(localStorage.usersRedux || '[]');
    if (localUsers.length === 0) {
      localStorage.usersRedux = JSON.stringify(usersData);
    }
    dispatch(getPostsData());
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/article/:articleId">
          <ArticlePage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
