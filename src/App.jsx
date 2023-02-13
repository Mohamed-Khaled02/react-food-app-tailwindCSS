import React from "react"
import Category from "./components/Category"
import Food from "./components/Food"
import HeadlineCard from "./components/HeadlineCard"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <div className="p-4 max-w-[1640px] mx-auto">
     <Navbar />
     <Hero />
     <HeadlineCard />
     <Food />
     <Category />
    </div>
  )
}

export default App
