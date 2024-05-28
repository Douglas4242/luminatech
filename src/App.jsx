import React from "react"

import { Footer, Header, Products, Technology, Solutions } from "./containers"
import { Navbar } from "./components"
import './App.css'

function App() {


  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Products />
        <Technology />
        <Solutions />
      </div>
      <Footer />
    </div>
  )
}

export default App
