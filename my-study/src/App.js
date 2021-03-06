import React, {useState} from 'react';
import Counter from './components/counter';
import ClassCounter from './components/ClassCounter';
import './styles/app.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript - 1', body: 'Description'},
    {id: 3, title: 'JavaScript - 2', body: 'Description'},
    {id: 4, title: 'JavaScript', body: 'Description'},
    {id: 5, title: 'JavaScript', body: 'Description'}
  ])


  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание поста'/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов про JS"/>
    </div>
  );
}

export default App;
