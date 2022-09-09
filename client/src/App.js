import {Layout} from './components/Layout';
import { Routes, Route } from 'react-router-dom';

import {MainPage} from './pages/MainPage';
import {PostsPage} from './pages/PostsPage';
import {PostPage} from './pages/PostPage';
import {AddPostPage} from './pages/AddPostPage';
import {LoginPage} from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';
import {EditPostPage} from './pages/EditPostPage';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { getMe } from './redux/features/auth/authSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='posts' element={<PostsPage />} />
        <Route path=':id' element={<PostPage />} />
        <Route path=':id/edit' element={<EditPostPage />} />
        <Route path='new' element={<AddPostPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Routes>

      <ToastContainer position='bottom-right' />
    </Layout>
  )
}

export default App;
