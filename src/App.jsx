import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const App = () => {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary' >
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
          </div>

        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      
      </BrowserRouter>
      
      
      
      
       
  )
}

export default App

