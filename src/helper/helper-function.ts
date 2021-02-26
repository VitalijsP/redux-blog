import { random } from 'lodash';

export const postBody = (body: string) => {
  let newBody = body;
  for (let i = 0; i < 5; i++) {
    newBody += ' ';
    newBody += body;
  }
  return newBody;
};

export const randomAuthor = () => {
  const number = random(100);
  if (number > 50) {
    return 'Vitalijs';
  }
  return 'Mikus';
};
