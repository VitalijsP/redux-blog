import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { LinkButton } from '../components/atom/button/link-button/link-button';
import { RegularButton } from '../components/atom/button/regular-button/regular-button';
import { Input } from '../components/atom/input/input';
import { LargeCard } from '../components/card/large-card/large-card';
import { categories } from '../data/data';
import { deletePostAction } from '../store/blogPost/action';
import { RootState } from '../store/store';

export const HomePage: FC = () => {
  const [chosenCategory, setChosenCategory] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const loggedUser = useSelector((state: RootState) => state.userInfo);

  const posts = useSelector((store: RootState) => store.blogPosts);

  const newArticleHandler = () => {
    history.push('/create');
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
        <div className="col-sm-3 col-xs-12">
          <Input
            type="text"
            id="search"
            value={searchValue}
            placeholder="search"
            inputHandler={(e) => handleSearchValue(e)}
          />
        </div>
        <div className="col-sm-9 col-xs-12 flex between-sm">
          <LinkButton label="filter" clickHandler={() => chosenCategoryHandler('All')}>
            All
          </LinkButton>
          {categories.map((category) => (
            <LinkButton label="filter" key={category} clickHandler={() => chosenCategoryHandler(category)}>
              {category}
            </LinkButton>
          ))}
        </div>
        <div className="row w100">
          {loggedUser.userType && (
            <div className="col-xs-12 margin-bottom--8">
              <RegularButton actionHandler={() => newArticleHandler()} type="button" classProps="w100">
                Create article
              </RegularButton>
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
