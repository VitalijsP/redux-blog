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

export const blogPosts: BlogPosts[] = [
  {
    id: '1',
    title: 'This is title 1',
    body:
      'body 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum nisi, recusandae non neque explicabo id, voluptate sapiente doloremque aspernatur quas molestias eius sint enim qui consequatur iste facilis est?',
    author: 'Author1',
    date: '01-04-2020',
    image: 'https://picsum.photos/1000/600?random=',
    category: ['Sport', 'Animals'],
    comments: [
      {
        id: '1',
        commentId: '1',
        email: 'vitalijs@gmail.com',
        body: 'comment body1',
      },
      {
        id: '1',
        commentId: '2',
        email: 'vitalijs@gmail.com',
        body: 'comment body1',
      },
    ],
  },
  {
    id: '2',
    title: 'This is title 2',
    body:
      'body 2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum nisi, recusandae non neque explicabo id, voluptate sapiente doloremque aspernatur quas molestias eius sint enim qui consequatur iste facilis est?',
    author: 'Author2',
    date: '02-05-2020',
    image: 'https://picsum.photos/1000/600?random=',
    category: ['Cars', 'Animals'],
    comments: [
      {
        id: '2',
        commentId: '3',
        email: 'vitalijs@gmail.com',
        body: 'comment body2',
      },
      {
        id: '2',
        commentId: '4',
        email: 'vitalijs@gmail.com',
        body: 'comment body1',
      },
    ],
  },
  {
    id: '3',
    title: 'This is title 3',
    body:
      'body 3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum nisi, recusandae non neque explicabo id, voluptate sapiente doloremque aspernatur quas molestias eius sint enim qui consequatur iste facilis est?',
    author: 'Author3',
    date: '03-06-2020',
    image: 'https://picsum.photos/1000/600?random=',
    category: ['Media', 'Home'],
    comments: [
      {
        id: '3',
        commentId: '5',
        email: 'vitalijs@gmail.com',
        body: 'comment body1',
      },
      {
        id: '3',
        commentId: '6',
        email: 'vitalijs@gmail.com',
        body: 'comment body1',
      },
    ],
  },
  // {
  //     id: '41',
  //     title: 'This is title 4',
  //     body: 'body 4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum nisi, recusandae non neque explicabo id, voluptate sapiente doloremque aspernatur quas molestias eius sint enim qui consequatur iste facilis est?',
  //     author: 'Author1',
  //     date: '04-08-2020',
  //     category: ['Sport', 'Flowers'],
  //     comments: ['comments7', 'comments8'],
  // },
  // {
  //     id: '1',
  //     title: 'This is title 1',
  //     body: 'body 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum nisi, recusandae non neque explicabo id, voluptate sapiente doloremque aspernatur quas molestias eius sint enim qui consequatur iste facilis est?',
  //     author: 'Author1',
  //     date: '01-04-2020',
  //     category: ['Sport', 'Animal'],
  //     comments: ['comments1', 'comments2'],
  // }
];
