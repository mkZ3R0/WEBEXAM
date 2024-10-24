import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Favorites from './pages/Favorites.jsx'
import Mainpage from './pages/Mainpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />
  },
  {
    path: "/favorites",
    element: <Favorites />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
