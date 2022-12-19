import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Home from './home/Home';
import Layout from './layout/layout';
import Users from './parent/users';
import Gallery from './gallery/Gallery';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Notfound from './Notfound/Notfound';
import Mobile from './Mobile/Mobile';
import Web from './Web/Web';
let routers = createBrowserRouter([
    // {path:'/', element:<Layout/> , errorElement:<Notfound/>, children:[
    {path:'/', element:<Layout/> ,  children:[
      { index:true, element:<Home/>},
      {path:'gallery', element:<Gallery/> , children:[
        {path:'mobile' , element:<Mobile/>},
        {path:'web' , element:<Web/>},
      ]},
      {path:'users', element:<Users/>},
      {path:'*', element:<Notfound/>},
    ]},
  ]);
export default function App() {
      return <RouterProvider router={routers}  />
          
}

{/*
      <>
           <BrowserRouter><Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="gallery" element={<Gallery />} />
           <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
      </>
    */}