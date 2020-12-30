import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/store';
import { categories } from '../data/data';
import { getPostsData, deletePostAction } from '../store/blogPosts/action';
import Card from '../components/card/card';
import Search from '../components/search/search';
import FilterButton from '../components/filter-button/filter-button';

const Home: FC = () => {
  const [chosenCategory, setChosenCategory] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const deleteHandler = (id: string) => {
    dispatch(deletePostAction(id));
  };

  const posts = useSelector((store: RootState) => store.blogPosts);
  const history = useHistory();
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
    return postCategories.some(
      (eachCategory) => eachCategory === chosenCategory
    );
  };

  const chosenCategoryHandler = (category: string) => {
    setChosenCategory(category);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <Search
            searchValue={searchValue}
            handleSearchValue={handleSearchValue}
          />
          <div className="row">
            <FilterButton
              label='All'
              chosenCategoryHandler={() => chosenCategoryHandler('All')}
            />
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                chosenCategoryHandler={() => chosenCategoryHandler(category)}
              />
            ))}
          </div>
          <div className="row">
            {posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())).map((post) => {
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
