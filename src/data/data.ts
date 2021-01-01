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

export const categories = ['Sport', 'Animals', 'Cars', 'Home', 'Media', 'Flowers', 'Wether', 'News'];

export const smallCardData = [
  {
    id1: '1',
    title1: 'Title 1 text',
    body1:
      '111 body Text, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos quisquam, cupiditate accusantium perferendis consectetur. Aliquid sed autem cum velit harum aperiam architecto. Delectus id architecto fugit consectetur reiciendis tempora!',
    image1: 'https://picsum.photos/240?random=100',
  },
  {
    id1: '2',
    title1: 'Title 2 text',
    body1:
      '222 body Text, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos quisquam, cupiditate accusantium perferendis consectetur. Aliquid sed autem cum velit harum aperiam architecto. Delectus id architecto fugit consectetur reiciendis tempora!',
    image1: 'https://picsum.photos/240?random=101',
  },
  {
    id1: '3',
    title1: 'Title 3 text',
    body1:
      '333 body Text, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos quisquam, cupiditate accusantium perferendis consectetur. Aliquid sed autem cum velit harum aperiam architecto. Delectus id architecto fugit consectetur reiciendis tempora!',
    image1: 'https://picsum.photos/240?random=102',
  },
];
