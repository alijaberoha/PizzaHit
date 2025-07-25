import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Provider store={store}>
       <App />
    </Provider>
    </HashRouter>
  </StrictMode>,
)
