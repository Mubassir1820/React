import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import App from './App.jsx'
// import AboutUs from './pages/AboutUs';
// import Shop from './pages/shop';
// import Checkout from './pages/checkout.jsx';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
import router from './routes/router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
