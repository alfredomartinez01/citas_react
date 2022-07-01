import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './dist/output.css' /* Para arreglar conflictos con no actualización de tailwind css */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
