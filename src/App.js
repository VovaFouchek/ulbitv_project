import React, { useState, useRef, useMemo } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyModal from "./components/UI/MyModal/MyModal";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Java', body: 'This is a Java' },
    { id: 2, title: 'C#', body: 'Some text' },
    { id: 3, title: 'Python', body: 'DataBase' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    console.log('Отаработала функция сортировки');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const CreatePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyModal></MyModal>
      <PostForm create={CreatePost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Lists of:" />
    </div>
  );
}

export default App;
