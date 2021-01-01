/* eslint-disable react/jsx-curly-newline */
import React, { FC, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styles from './new-article-form.module.scss';
import { categories } from '../../data/data';
import { RootState } from '../../store/store';
import { BlogPosts } from '../../store/blogPosts/type';
import { addNewPostAction } from '../../store/blogPosts/action';
// type Props = {
//   value: string;

//   onSelectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   titleValueHandler: (e: React.FormEvent<HTMLLabelElement>) => void;
//   bodyValueHandler: (e: React.FormEvent<HTMLLabelElement>) => void;
//   imageValueHandler: (e: React.FormEvent<HTMLLabelElement>) => void;
// };
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

const NewArticleForm: FC<Props> = ({ label, submitHandler }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('https://picsum.photos/200/300');
  const [selectedOption1, setSelectedOption1] = useState('Sport');
  const [selectedOption2, setSelectedOption2] = useState('Cars');

  const posts = useSelector((state: RootState) => state.blogPosts);
  const history = useHistory();
  const { articleId } = useParams<{ articleId: string }>();

  useEffect(() => {
    const Article = posts.find((article) => article.postId === articleId);
    if (Article) {
      setTitle(Article?.title);
      setBody(Article?.body);
      setImage(Article?.image);
      setSelectedOption1(Article?.category[0]);
      setSelectedOption2(Article?.category[1]);
    }
  }, []);

  const goBackHandler = () => {
    history.push('/home');
  };

  return (
    <div className={styles.articleWrapper}>
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
            <input
              type="text"
              id="title"
              placeholder="Title"
              className={styles.inputField}
              value={title}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
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

export default NewArticleForm;
