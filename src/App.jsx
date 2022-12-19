import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Home from './home/Home';
import User from './child/user';
import Layout from './layout/layout';
import Users from './parent/users';
import Gallery from './gallery/Gallery';
import { createBrowserRouter } from 'react-router-dom';
let routers = createBrowserRouter([
    {path:'/', element:<Layout/> , children:[
      {path:'home', element:<Home/>},
      {path:'gallery', element:<Gallery/>},
      {path:'users', element:<Users/>},
    ]},
  ]);
export default class App extends Component {
    state = {};
    render(){
      return <>
      <Home/>
      <Users/>
      <Gallery/>
      </>
    }
}

