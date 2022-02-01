import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
  { id: 1, name: 'Bob', age: 21 },
  { id: 2, name: 'Sam', age: 45 },
  { id: 3, name: 'Con', age: 22 },
  { id: 4, name: 'Man', age: 55 },
  { id: 5, name: 'Boy', age: 55 },
  { id: 6, name: 'Her', age: 31 },
  { id: 7, name: 'Hec', age: 31 },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
