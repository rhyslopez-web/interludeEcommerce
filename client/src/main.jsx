import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AdminProductPage from './pages/AdminProductPage/AdminProductPage.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import AdminAddProduct from './pages/AdminAddProduct/AdminAddProduct.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/productDetails/:id',
    element: <AdminProductPage/>
  },
  {
    path: '/addProduct',
    element: <AdminAddProduct/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
