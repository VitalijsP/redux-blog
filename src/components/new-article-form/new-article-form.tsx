import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './new-article-form.module.scss';
import { categories } from '../../data/data';
import { UserType } from '../../store/user/type';

// type Props = {
//   value: string;

//   onSelectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   titleValueHandler: (e: React.FormEvent<HTMLLabelElement>) => void;
//   bodyValueHandler: (e: React.FormEvent<HTMLLabelElement>) => void;
//   imageValueHandler: (e: React.FormEvent<HTMLLabelElement>) => void;
// };
type Props = {
  label: string;
};

const NewArticleForm: FC<Props> = ({label}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('Select category 1');
  const [selectedOption2, setSelectedOption2] = useState('Select category 2');

  const history = useHistory();
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
      <form>
        <div className="row">
          <div className="col-xs-4">
            <input
              type="text"
              id="title"
              placeholder="Title"
              className={styles.inputField}
              value={title}
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
