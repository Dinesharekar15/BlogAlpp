import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Protected, { Signup } from './components/index.js'
import Allpost from './pages/Allpost.jsx'

import {Protected,Login} from './components/index.js'
import Home from './pages/Home.jsx'
import Addpost from './pages/Addpost.jsx'
import Editpost from './pages/Editpost.jsx'
import Post from './pages/Post.jsx'
import Signup from './pages/Signup.jsx'
import { Allpost } from './pages/index.js'


const Router= createBrowserRouter([{
  path :'/',
  element: <App/>,
  Children:[
    {
      path:'/',
      element:<Home/>
    },
    {
    
      path:'/login',
      element:
      (<Protected authentication={false} >
      

        <Login/>
      </Protected>) ,
      
    },
    {
      path:'/signup',
      element:(<Protected authentication={false} ><Signup/></Protected>)
    },
    {
      path:'/all-posts',
      element:(<Protected>
        {/* <Allpost/> */}
        <Allpost/>
        </Protected>)
    },
    {
      path:'/add-post',
      element:(<Protected authentication>
        {''}
        <Addpost/>
        </Protected>)
    },
    {
      path:'/edit-post',
      element:(<Protected authentication>
        {''}
        <Editpost/>
        </Protected>)
    },
    {
      path: "/post/:slug",
      element: <Post />,
    }
  ]
    
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
