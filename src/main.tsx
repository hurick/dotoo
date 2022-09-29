import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { ToastContainer } from 'react-toastify';

import { Home } from './pages/Home'

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Home />
    <ToastContainer />
  </StrictMode>
)
