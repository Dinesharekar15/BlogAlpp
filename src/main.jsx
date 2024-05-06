import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { Signup } from './components/index.js'
import Allpost from './pages/Allpost.jsx'

import Protected from './components/authlayout.jsx'
import Login from './components/login.jsx'
import Homepage from './pages/Homepage.jsx'
import Addpost from './pages/Addpost.jsx'
import Editpost from './pages/Editpost.jsx'
import Post from './pages/Post.jsx'

const routing = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>                            
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Protected authentication={false}><Signup /></Protected>} />
            <Route path="/login" element={<Protected authentication={false}><Login /></Protected>} />
            <Route path="/all-posts" element={<Protected><Allpost /></Protected>} />
            <Route path="/add-post" element={<Protected authentication><Addpost /></Protected>} />
            <Route path="/edit-post" element={<Protected authentication><Editpost /></Protected>} />
            <Route path="/post/:slug" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);




ReactDOM.createRoot(document.getElementById('root')).render(routing)
