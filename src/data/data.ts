export type BlogPosts = {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  image: string;
  category: string[];
  comments: Comments[];
};

type Comments = {
  id: string;
  commentId: string;
  email: string;
  body: string;
};

export const categories = [
  'Sport',
  'Animals',
  'Cars',
  'Home',
  'Media',
  'Flowers',
  'Wether',
  'News',
];