import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css'
import App from './App.jsx'
import Cart from './components/Cart.jsx';
import Layout from './layout/Layout.jsx';
import { CartContext, CartProvider } from './context/cartContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
