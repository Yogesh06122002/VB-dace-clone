import React from 'react'

import Hero from './components/hero'

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Our from './pages/Our.jsx'
import Shipping from './pages/shipping.jsx'

import Addproduct from '../src/admin/Addproduct.jsx'
import Prodcts from './pages/Prodcts.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products",
        element:<Prodcts/>
      },
      {
        path:"/about",
        element:<About/>

      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/our",
        element:<Our/>
      },
      {
        path:"/Shipping",
        element:<Shipping/>
      }
    ]
   
  },
  {
    path:"/admin",
    element:<Addproduct/>
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router}/>

       
        
      
    </div>
  )
}

export default App