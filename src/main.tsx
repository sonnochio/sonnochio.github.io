import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './About'
import Home from './Home'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
     <Routes>
        <Route  path="/" element={<App />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/home" element={<Home />} />

      </Routes>
  </BrowserRouter>

)
