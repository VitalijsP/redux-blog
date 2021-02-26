import moment from 'moment';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { BlogPost } from '../../../store/blogPost/type';
import { RootState } from '../../../store/store';
import { RegularButton } from '../../atom/button/regular-button/regular-button';
import { Image } from '../../atom/image/image';
import styles from './large-card.module.scss';

type Props = {
  post: BlogPost;
  deleteHandler: () => void;
  articleHandler: () => void;
};

export const LargeCard: FC<Props> = ({ post, deleteHandler, articleHandler }) => {
  const { image, postId, body, title, date, category } = post;

  const loggedUser = useSelector((state: RootState) => state.userInfo.userType);

  return (
    <div key={postId} className={styles.card}>
      <Image link={image} width={4} height={1} loading={true} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subTitle}>{moment.unix(date / 1000).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p className={styles.body}>{body.substring(0, 200)}...</p>
        <p className={styles.body}>
          {category[0]}, {category[1]}
        </p>
        <RegularButton type="button" actionHandler={articleHandler}>
          Read more
        </RegularButton>
        {loggedUser === 'admin' && (
          <RegularButton type="button" actionHandler={deleteHandler}>
            Delete
          </RegularButton>
        )}
      </div>
    </div>
  );
};
