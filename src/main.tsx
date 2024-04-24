import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotchHeader from './views/notch-header/NotchHeader.tsx'
import Views from './views/Views.tsx'
import Prototype from './views/Prototype.tsx'
import ScrollMarquee from './views/app/ScrollMarquee.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'app',
    element: <Prototype />,
    children: [
      {
        path: '/app/scroll-marquee',
        element: <ScrollMarquee />
      }
    ]
  },
  {
    path: 'ui',
    element: <Views />,
    children: [
      {
        path: '/ui/notch',
        element: <NotchHeader />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
