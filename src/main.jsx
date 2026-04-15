import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root';
import Hero from './Root/HomePage/Hero';
import Navbers from './Root/HomePage/Navbers';
import Footer from './Root/HomePage/Footer';
import YourFriends from './Root/HomePage/YourFriends';


const router= createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Navbers },
      { path: 'hero', Component: Hero },
      {
        path:'friends',
        loader:()=>fetch('/public/Friends.json'),
        Component:YourFriends
      },
      { path: 'footer', Component: Footer }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
