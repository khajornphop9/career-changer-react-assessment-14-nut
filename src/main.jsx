import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import HomeAdmin from './HomeAdmin'
import HomeUser from './HomeUser'
import Owner from './owner'

const router = createBrowserRouter([
{
  path : '/',
  element :  <Home />
},
{
  path : '/owner',
  element :  <Owner />
},
{
  path : '/home/user',
  element :  <HomeUser />
},
{
  path : '/home/admin',
  element :  <HomeAdmin />
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
