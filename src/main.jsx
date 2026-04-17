import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root';
import TimeLine from './Root/HomePage/TimeLine';
import IndividualFriends from './Root/HomePage/IndividualFriends';
import Analytics from './Root/HomePage/Analytics';
import Home from './Root/Component/Home';
import Htm404 from './Root/Component/Htm404';


const router= createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index:true,
        Component:Home,
      },
      {
        path:'user/:id',
        loader:()=>fetch('/Friends.json'),
        Component:IndividualFriends
      },
      { path: 'timeline', Component: TimeLine },
      { path: 'anylytics', Component: Analytics },
    ]
  }
,{
  path:'*',
  Component:Htm404
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
