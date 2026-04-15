import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Root/HomePage/Navbar/Navbar';
import Root from './Root/Root';


const router= createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Navbar },
      // { path: 'phone', Component: Phone },
      // { path: 'laptop', Component: Laptop }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
