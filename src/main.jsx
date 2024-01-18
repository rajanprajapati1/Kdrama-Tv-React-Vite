import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.css'
import './styles/next.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('main')).render(
        <BrowserRouter>
        <App />
        </BrowserRouter>
)
