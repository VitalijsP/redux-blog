import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/store';
import { categories } from '../data/data';
import { deletePostAction } from '../store/blogPosts/action';
import Card from '../components/card/card';
import Search from '../components/search/search';
import FilterButton from '../components/button/filter-button/filter-button';
import SwitchAccount from '../components/switch/switch';
import { logoutUserAction } from '../store/user/action';
import NewArticleButton from '../components/button/new-article-button/new-article-button';

const Home: FC = () => {
  const [chosenCategory, setChosenCategory] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const loggedUser = useSelector((state: RootState) => state.userInfo);

  const posts = useSelector((store: RootState) => store.blogPosts);
  console.log(posts);
  
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
    return showPost
  };

  const chosenCategoryHandler = (category: string) => {
    setChosenCategory(category);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <div className="row end-xs">
            <div className="col-xs-6">
              <Search searchValue={searchValue} handleSearchValue={handleSearchValue} />
            </div>
            <div className="col-xs-6">
              <SwitchAccount registerHandler={registerHandler} logoutHandler={logoutHandler} loggedUser={loggedUser} />
            </div>
          </div>
          <div className="row between-xs">
            <FilterButton label="All" chosenCategoryHandler={() => chosenCategoryHandler('All')} />
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                chosenCategoryHandler={() => chosenCategoryHandler(category)}
              />
            ))}
          </div>
          <div className="row end-xs">
            {loggedUser.userType && (
              <div className="col-xs-12">
                <NewArticleButton newArticleHandler={() => newArticleHandler()} />
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
                      <Card
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
    </div>
  );
};

export default Home;
