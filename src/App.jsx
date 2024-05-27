import React from "react"

import { Blog, Features, Footer, Header } from "./containers"
import { CTA, Brand, Navbar } from "./components"
import './App.css'

function App() {


  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
