import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home.jsx';
import DesignSamples from './Components/DesignSamples.jsx';
import AboutPage from './Components/AboutPage.jsx';
import CareerPage from './Components/CareerPage.jsx';
import ContactForm from './Components/Contactfrom.jsx';
import ServicePage from './Components/ServicePage.jsx';
import ContactPage from './Components/ContactPage.jsx';
import Clientlogin from './Components/Clientlogin.jsx';
import Privacy from './Components/Privacy.jsx';
import Serviceagreement from './Components/Serviceagreement.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/service',
        element:<ServicePage />
      },
      {
        path:'designs',
        element:<DesignSamples />
      },
      {
        path:'about',
        element:<AboutPage />
      },
      {
        path:'careers',
        element:<CareerPage />
      },
      {
        path:'contact',
        element:<ContactPage />
      },
      {
        path:'client',
        element:<Clientlogin />
      },
      {
        path:'privacy',
        element:<Privacy />
      },
      {
        path:'serviceagreement',
        element:<Serviceagreement />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
