import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotchHeader from './components/notch-header/NotchHeader.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/notch',
    element: <NotchHeader />
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
