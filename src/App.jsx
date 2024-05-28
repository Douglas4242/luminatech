import React from "react"

import { Blog, Features, Footer, Header, Products, Technology } from "./containers"
import { CTA, Navbar } from "./components"
import './App.css'

function App() {


  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Products />
        <Technology />
      </div>

      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
