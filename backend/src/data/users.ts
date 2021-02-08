import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'AdminUser',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'Luke Pritchard',
    email: 'lp@lukepritchard.ca',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'John Doe',
    email: 'John@example.com',
    password: bcrypt.hashSync('123456'),
  },
];

export default users;
