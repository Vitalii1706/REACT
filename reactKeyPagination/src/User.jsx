import React from 'react';

// in:str, age
// ou: jsx

const User = ({ name, age }) => (
  <li className="user">
    <span className="user__name">{name}</span>
    <span className="user__age">{age}</span>
  </li>
);

export default User;
