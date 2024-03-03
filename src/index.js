import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Header from './Header';
import Work from './Work';
import Projects from './Projects';

const router = createBrowserRouter(
  [
    {
      path: '/',
      exact: true,
      element: <div style={{backgroundColor:"#000401"}} className='pagewrap'><Header /> <LandingPage /></div>
    },
    {
      path: '/about',
      element: <div className='pagewrap'><Header /> <About /></div>
    },
    {
      path: '/work',
      element: <div className='pagewrap'><Header /> <Work /></div>
    },
    {
      path: '/projects',
      element: <div className='pagewrap'><Header /> <Projects /></div>
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Implement code to

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
