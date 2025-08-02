import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'  // Make sure to import ReactDOM properly
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
