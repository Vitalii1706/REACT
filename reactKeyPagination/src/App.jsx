import React from 'react';
import UsersList from './UsersList.jsx';

const users = [
  { id: 1, name: 'Bob', age: 21 },
  { id: 2, name: 'Sam', age: 45 },
  { id: 3, name: 'Con', age: 22 },
  { id: 4, name: 'Man', age: 55 },
  { id: 5, name: 'Boy', age: 55 },
  { id: 6, name: 'Her', age: 30 },
  { id: 7, name: 'Mon', age: 50 },
  { id: 8, name: 'Bor', age: 53 },
  { id: 9, name: 'Nis', age: 37 },
  { id: 10, name: 'Nik', age: 22 },
];

const App = () => (
  <div>
    <UsersList users={users} />
  </div>
);

export default App;
