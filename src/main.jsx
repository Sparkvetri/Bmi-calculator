import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import './App.css'
import {CheckBmi} from "./CheckBmi.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CheckBmi/>
  </React.StrictMode>,
)
