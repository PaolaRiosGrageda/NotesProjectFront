import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { NotesApp } from './NotesApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
