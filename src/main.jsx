import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import FirebaseProvider from './firebase/FirebaseProvider.jsx'
import ScrollToTop from './ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}>
        <ScrollToTop></ScrollToTop>
      </RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
