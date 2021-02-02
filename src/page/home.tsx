import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FilterButton } from '../components/atom/button/filter-button/filter-button';
import { RegularButton } from '../components/atom/button/regularButton/regularButton';
import { LargeCard } from '../components/card/large-card/large-card';
import { Search } from '../components/search/search';
import { SwitchAccount } from '../components/switch/switch';
import { categories } from '../data/data';
import { deletePostAction } from '../store/blogPost/action';
import { RootState } from '../store/store';
import { logoutUserAction } from '../store/user/action';

export const Home: FC = () => {
  const [chosenCategory, setChosenCategory] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const loggedUser = useSelector((state: RootState) => state.userInfo);

  const posts = useSelector((store: RootState) => store.blogPosts);

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push('/login');
  };

  const newArticleHandler = () => {
    history.push('/new-article');
  };

  const registerHandler = () => {
    history.push('/registration');
  };

  const deleteHandler = (id: string) => {
    dispatch(deletePostAction(id));
  };

  const articleHandler = (id: string) => {
    history.push(`/article/${id}`);
  };

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const sortPostCategory = (postCategories: string[]) => {
    if (chosenCategory === 'All') {
      return true;
    }
    const showPost = postCategories.some((eachCategory) => eachCategory === chosenCategory);
    return showPost;
  };

  const chosenCategoryHandler = (category: string) => {
    setChosenCategory(category);
  };

  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <SwitchAccount registerHandler={registerHandler} logoutHandler={logoutHandler} loggedUser={loggedUser} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-xs-12">
          <Search searchValue={searchValue} handleSearchValue={handleSearchValue} />
        </div>
        <div className="col-sm-8 col-xs-12 flex between-sm">
          <FilterButton label="All" chosenCategoryHandler={() => chosenCategoryHandler('All')} />
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              chosenCategoryHandler={() => chosenCategoryHandler(category)}
            />
          ))}
        </div>
        <div className="row w100">
          {loggedUser.userType && (
            <div className="col-xs-12 margin-bottom--8">
              <RegularButton
                actionHandler={() => newArticleHandler()}
                label="Create article"
                type="button"
                classProps="w100"
              />
            </div>
          )}
        </div>
        <div className="row">
          {posts
            .sort((post, nextPost) => nextPost.date - post.date)
            .filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((post) => {
              return (
                sortPostCategory(post.category) && (
                  <div className="col-xs-12" key={post.postId}>
                    <LargeCard
                      post={post}
                      deleteHandler={() => deleteHandler(post.postId)}
                      articleHandler={() => articleHandler(post.postId)}
                    />
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};
