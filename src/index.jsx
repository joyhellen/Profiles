import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from "./About.jsx"
import Contact from './Contact.jsx'
import Character from './Character.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"

const paths = createBrowserRouter([ 
  {
    path: '/', 
    element: <App />
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/character/:id',
    element : <Character/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <RouterProvider router={paths}/>
	</React.StrictMode>
)