import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 15},
    {id: 2, message: 'It\'s my first post!', likeCount: 20},
    {id: 3, message: 'I\'m here', likeCount: 5},
    {id: 4, message: 'It\'s my second post!', likeCount: 9},
    {id: 5, message: 'What\'s new?', likeCount: 3},
];

let dialogs = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrew'},
    {id:3, name:'Sveta'},
    {id:4, name:'Sasha'},
    {id:5, name:'Viktor'},
    {id:6, name:'Valera'}
];

let messages = [
    {id:1, message:'Hi!'},
    {id:2, message:'How is your it-kamasutra?'},
    {id:3, message:'Yo!!!'},
    {id:4, message:'Yo!!!'},
    {id:5, message:'Yo!!!'}
];



ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.querySelector('#root')
);