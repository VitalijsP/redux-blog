export type BlogPost = {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  image: string;
  category: string[];
  comments: Comment[];
};

type Comment = {
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
  'News'
];
