import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './components/Shop/Shop.jsx'
import Home from './components/Layout/Home.jsx'
import Orders from './components/Orders/Orders.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Login from './components/Login/Login.jsx'
import cartProductsLoader from './Loaders/cartProductsLoaders.js'
import SignUp from './components/SignUp/SignUp.jsx'
import AuthProvider from './components/Providers/AuthProvider.jsx'
import Procced from './components/Procced/Procced.jsx'
import PrivateRoutes from './components/Routes/PrivateRoutes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'procced',
        element: <PrivateRoutes><Procced></Procced></PrivateRoutes>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
