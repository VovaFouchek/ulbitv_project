import React, { useState, useRef } from "react";
import ClassCounter from './components/ClassCounter';
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  const CreatePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={CreatePost} />
      {posts.length
      ?
      <PostList remove={removePost} posts={posts} title="Lists of:" />
      :
      <h1 style={{textAlign: 'center'}}>Posts not found</h1>
      }
     
    </div>
  );
}

export default App;
