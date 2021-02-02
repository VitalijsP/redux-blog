import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { usersData } from './data/users';
import { ArticlePage } from './page/article-page';
import { NewArticle } from './page/create-article-page';
import { EditArticle } from './page/edit-article-page';
import { Home } from './page/home';
import { Login } from './page/login';
import { Registration } from './page/registration';
import { getPostsData } from './store/blogPost/action';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.usersRedux || '[]');
    if (localUsers.length === 0) {
      localStorage.usersRedux = JSON.stringify(usersData);
    }
    dispatch(getPostsData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
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
        <Route exact path="/new-article">
          <NewArticle />
        </Route>
        <Route exact path="/edit-article/:articleId">
          <EditArticle />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
