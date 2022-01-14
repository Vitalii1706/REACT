import React from 'react';
import ReactDOM from 'react-dom';
import './comments.scss';
import './styles.scss';
import Comment from './Comment.jsx';


const rootElement = document.querySelector('#root');

const userInfo = {
    name: 'Tom',
    author: 'Anonimus',
    avatarUrl: 'https://avatars1.githubusercontent.com/u10002'
}

ReactDOM.render(
    < Comment
    author={userInfo}
    text="Good job!!!"
    date={new Date('2022-01-14')}
     />, 
     rootElement
     );
