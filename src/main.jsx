import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero'
import './index.css'
import Navbar from './Navbar'
import macbook from "./assets/macbook.png";
import Card from './Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card />
  </React.StrictMode>,
)
