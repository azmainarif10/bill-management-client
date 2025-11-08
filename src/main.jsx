import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthProvider from './Pages/AuthProvider';
import Root from './Layouts/Root';
import Home from './Pages/Home';
import Login from './User/Login';
import SignUp from './User/SignUp';

const router =createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/login",
        Component:Login,
      },
       {
        path:"/signup",
        Component:SignUp,
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
