import users from './users';
import posts from './posts';

const delay = 2500;

const sendResponse = (error, payload) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (error) return reject(error);
    resolve(payload);
  }, delay);
});

export const signIn = ({ username, password }) => {
  let error = null;

  const user = users.filter(u => (u.email === username) && (u.password === password))[0];

  if (!user) error = { msg: 'Incorrect username or password' };

  return sendResponse(error, { user });
};

export const signUp = ({ username, password, password2 }) => {
  let error = null;
  let newUser = null;

  const user = users.filter(u => u.email === username)[0];

  if (user) {
    error = { msg: 'Username is registered' };
  } else if (!password) {
    error = { msg: 'Password is required' };
  } else if (password !== password2) {
    error = { msg: 'Passwords do not match' };
  } else {
    newUser = {
      email: username,
      password,
      id: (Math.max(...users.map(u => u.id)) || 0) + 1
    };
    users.push(newUser);
  }

  sendResponse(error, { user: newUser });
};

export const getPosts = () => sendResponse(null, posts);

export const getPost = ({ id }) => {
  let error = null;

  const post = posts.filter(p => p.email === id)[0];

  if (!post) error = { msg: `Post with id ${id} not found` };

  return sendResponse(error, { post });
};
