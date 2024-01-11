import React from 'react'
import Navbar from './Components/Navbar'
import Highlights from './Components/Highlights'
import Services from './Components/Services'
import Faqssection from './Components/Faqssection'
import Footer from './Components/Footer'
import Aboutus from './Components/Aboutus'
import Contact from './Components/Contactfrom'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
