import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/organisms/header/header';
import { CreatePostPage } from './page/create';
import { EditPostPage } from './page/edit';
import { HomePage } from './page/home';
import { LoginPage } from './page/login';
import { PostPage } from './page/post';
import { RegistrationPage } from './page/registration';
import { getPostsData } from './store/blogPost/action';
import { usersData } from './store/user/type';

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
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route exact path="/article/:slug">
          <PostPage />
        </Route>
        <Route exact path="/create">
          <CreatePostPage />
        </Route>
        <Route exact path="/edit/:slug">
          <EditPostPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
