import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Projects from './pages/Projects';
import Contactus from './pages/Contactus';
import img from './images/piyushdoc.JPEG'
export let image = img;
let router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/portfolio',
    element:<Home/>
  },
  {
    path:'/projects',
    element:<Projects/>
  },
  {
    path:'/contact',
    element:<Contactus/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
