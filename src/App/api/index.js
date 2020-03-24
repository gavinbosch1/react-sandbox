import users from './users';
import posts from './posts';

const delay = 5000;

const sendResponse = (error, payload) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (error) return reject(error);
    resolve(payload);
  }, delay);
});

export const signIn = ({ username, password }) => {
  let error = null;

  const user = users.filter(u => (u.email === username) && (u.password === password));

  if (!user) error = { msg: 'Incorrect username or password' };

  sendResponse(error, { user });
};

export const getPosts = () => sendResponse(null, posts);

export const getPost = ({ id }) => {
  let error = null;

  const post = posts.filter(p => p.email === id);

  if (!post) error = { msg: `Post with id ${id} not found` };

  sendResponse(error, { post });
};
