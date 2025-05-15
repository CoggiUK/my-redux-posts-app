import logo from './logo.svg';
import './App.css';
import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


const App = () => (
  <div style={{ padding: 20 }}>
    <PostForm />
    <PostList />
  </div>
);

export default App;
