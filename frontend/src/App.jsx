import React from 'react'

import Hero from './components/hero'

import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Our from './pages/Our.jsx'
import Shipping from './pages/shipping.jsx'
import Kitchen from './pages/KItchen.jsx'
import Accessories from './pages/Accessories.jsx'

import Addproduct from '../src/admin/Addproduct.jsx'
import Prodcts from './pages/Prodcts.jsx'
import Tableware from './pages/Tableware.jsx'

import Kitchentools from './pages/Kitchentools.jsx'
import Kitchenmate from './pages/Kitchenmate.jsx'
import Productid from './pages/productid.jsx'
import Cart from './pages/Cart.jsx'


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
        element:<Prodcts />
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
      },
      {
        path:"/kitchenware",
        element:<Kitchen/>
      },
      {
        path:"/accessories",
        element:<Accessories/>
      },
      {
        path:"/tableware",
        element:<Tableware/>
      },
      {
        path:"/kitchenmate",
        element:<Kitchenmate/>
      },
      {
        path:"/kitchentools",
        element:<Kitchentools/>
      },
      {
        path:"/product/:productid",
        element:<Productid/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
   
  },
  {
    path:"/admin",
    element:<Outlet/>,
    children:[
      {
        index:true,
        // path:"/",
        element:<Addproduct/>
      },
      {
        path:"addproduct",
        element:<div>hi</div>
      }
    ]
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