import React from 'react';
import Comment from './Comment';

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars1.githubusercontent.com/u10002',
}


const App = () => {
 return (
    <Comment user={userInfo} text="Good job!!!" date={new Date('2022-01-14')}
    />
  )
};

export default App;