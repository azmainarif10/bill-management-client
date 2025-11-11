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
import Bills from './Pages/Bills';
import BillDetail from './Pages/BillDetail';
import Private from './Pages/Private';
import MyBill from './Pages/MyBill';
import AddBill from './Pages/AddBill';
import Error from './Pages/Error';
import { HelmetProvider } from "react-helmet-async";

const router =createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/login",
      element:<Login></Login>

      },
       {
        path:"/signup",
        element:<SignUp></SignUp>
      },
       {
        path:"/bills",
        element:<Bills></Bills>
      },
       {
        path:"/bill-detail/:id",
        element:(<Private>
          <BillDetail></BillDetail>
        </Private>)
      },
      {
        path:"/pay-bill",
        element:(<Private>
          <MyBill></MyBill>
        </Private>)
      },
      {
        path:"/add-bills",
        element: <Private>
            <AddBill></AddBill>
        </Private>
      },
        {
    path:"*",
element:<Error></Error>
   }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
       <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
    
  </StrictMode>,
)
