
import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import router from './routes/AppRoutes.jsx'
import { RouterProvider } from "react-router";
import './index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
