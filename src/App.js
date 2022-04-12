import React, { useState, useRef } from "react";
import ClassCounter from './components/ClassCounter';
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {

  const [selectedSort, setSelectedSort] = useState('')

  const [posts, setPosts] = useState([
    { id: 1, title: 'Java', body: 'This is a Java' },
    { id: 2, title: 'C#', body: 'Some text' },
    { id: 3, title: 'Python', body: 'DataBase' },
  ])

  const CreatePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={CreatePost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title="Lists of:" />
        :
        <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      }
    </div>
  );
}

export default App;
