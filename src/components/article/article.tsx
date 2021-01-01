import React, { FC, useRef, useEffect } from 'react';
import { sampleSize } from 'lodash';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/store';
import { BlogPosts } from '../../store/blogPosts/type';
import Comment from '../comments/comments';
import styles from './article.module.scss';
import SmallCard from '../small-card/small-card';
import { UserType } from '../../store/user/type';

type Props = {
  article: BlogPosts;
  backHandlerButton: () => void;
};

const Article: FC<Props> = ({ article, backHandlerButton }) => {
  const { title, body, image, author, date, postId } = article;
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [postId]);

  const user: UserType = useSelector((state: RootState) => state.userInfo);

  const sameCategoryPosts = useRef(
    sampleSize(
      useSelector((state: RootState) =>
        state.blogPosts.filter((eachPost) =>
          eachPost.category.some((category) => category === article.category[0] || category === article.category[1]),
        ),
      ),
      3,
    ),
  );

  const articleHandler = (smallPostId: string) => {
    history.push(`/article/${smallPostId}`);
  };

  const editHandler = () => {
    history.push(`/edit-article/${postId}`);
  };

  return (
    <div className={styles.articleWrapper}>
      <div className="row">
        <div className="col-xs-6">
          <button className={styles.button} type="button" onClick={backHandlerButton}>
            Go back
          </button>
        </div>
        <div className="col-xs-6 flex end-xs">
          {user.userName?.toLowerCase() === article.author.toLowerCase() && (
            <button className={styles.button} type="button" onClick={editHandler}>
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className={styles.article}>
            <div className={styles.imageWrapper}>
              <h1 className={styles.loading}>Loading...</h1>
              <img src={image} className={styles.image} alt="" />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <h4 className={styles.subTitle}>
              Written by {author} on {moment.unix(date / 1000).format('MMMM Do YYYY, h:mm:ss a')}
            </h4>
            <p className={styles.body}>{body}</p>
          </div>
        </div>
      </div>
      <div className="row">
        {sameCategoryPosts.current.map((post) => (
          <div key={post.postId} className="col-md-4 col-sm-6 col-xs-12">
            <SmallCard
              title={post.title}
              body={post.body}
              image={post.image}
              articleHandler={() => articleHandler(post.postId)}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-xs-12">
          <Comment comments={article.comments} postId={article.postId} />
        </div>
      </div>
    </div>
  );
};

export default Article;
