/* eslint-disable react/jsx-curly-newline */
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { categories } from '../../data/data';
import { RootState } from '../../store/store';
import { Input } from '../atom/input/input';
import styles from './new-article-form.module.scss';

type Props = {
  label: string;
  submitHandler: (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    body: string,
    image: string,
    selectedOption1: string,
    selectedOption2: string,
  ) => void;
};

export const NewArticleForm: FC<Props> = ({ label, submitHandler }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('https://picsum.photos/200/300');
  const [selectedOption1, setSelectedOption1] = useState('Sport');
  const [selectedOption2, setSelectedOption2] = useState('Cars');

  const posts = useSelector((state: RootState) => state.blogPosts);
  const history = useHistory();
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const article = posts.find((item) => item.postId === slug);
    if (article) {
      setTitle(article.title);
      setBody(article.body);
      setImage(article.image);
      setSelectedOption1(article.category[0]);
      setSelectedOption2(article.category[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBackHandler = () => {
    history.push('/home');
  };

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-xs-12">
          <h1 className={styles.title}>{label}</h1>
        </div>
      </div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          submitHandler(e, title, body, image, selectedOption1, selectedOption2)
        }
      >
        <div className="row">
          <div className="col-xs-4">
            <Input
              type="text"
              id="title"
              placeholder="Title"
              //  classProps={styles.classProps}
              value={title}
              inputHandler={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <input
              type="text"
              id="image"
              placeholder="Image link"
              className={styles.inputField}
              value={image}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
            />
            <select
              className={styles.inputField}
              name={selectedOption1}
              id={selectedOption1}
              value={selectedOption1}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption1(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              className={styles.inputField}
              name={selectedOption2}
              id={selectedOption2}
              value={selectedOption2}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption2(e.target.value)}
            >
              {categories.map((category) => (
                <option className={styles.inputField} key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button className={styles.button} type="submit">
              Submit
            </button>
            <button className={styles.button} type="button" onClick={goBackHandler}>
              Dicard
            </button>
          </div>
          <div className="col-xs-8">
            <div className={styles.scroller}>
              <textarea
                name=""
                required
                id="newArticle"
                placeholder="My story starts here..."
                className={styles.textarea}
                value={body}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
              >
                {body}
              </textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
