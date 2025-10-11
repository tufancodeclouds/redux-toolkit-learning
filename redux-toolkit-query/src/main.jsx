import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import posts from './app/api/apiSlice'

import { Provider } from 'react-redux'
import store from './app/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
