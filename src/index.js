import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Hello. How are you?", likesCount: 21 },
  { id: 2, message: "It's my first post.", likesCount: 33 },
  { id: 3, message: "I am living in Saint-Petersburg", likesCount: 73 },
  { id: 4, message: "Moscow is a capital of Russia.", likesCount: 56 },
];

let dialogs = [
  { id: 1, name: "Maxim" },
  { id: 2, name: "Anna" },
  { id: 3, name: "Andrey" },
  { id: 4, name: "Sofia" },
  { id: 5, name: "Sasha" },
  { id: 6, name: "Sem" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Spartak - champion!" },
  { id: 4, message: "Yo" },
  { id: 5, message: "WTF?!" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
