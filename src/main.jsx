// import React, { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router'
// import {router} from './router'
// import Header from './components/ui/custom/Header'
// import { Toaster } from 'sonner'
// import { GoogleOAuthProvider } from '@react-oauth/google'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
//       <Header/>
//       <Toaster/>
//       <RouterProvider router={router}/>
//     </GoogleOAuthProvider>;
//   </StrictMode>
// )


import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { router } from './router'
import Header from './components/ui/custom/Header'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ThemeProvider } from 'styled-components'   // 🔥 Import ThemeProvider
import { theme } from './theme'                      // 🔥 Import your theme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <ThemeProvider theme={theme}>    {/* 🔥 Wrap everything inside ThemeProvider */}
        <Header />
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </GoogleOAuthProvider>
  </StrictMode>
)


