import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import '@/App.css'

import Navbar from '@components/Navbar'
import Home from '@components/Home/Home'

function App() {
  

  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<h1>Services</h1>} />
            <Route path="/portfolio" element={<h1>Portfolio</h1>} />
            <Route path="/contact" element={<h1>Contact Me</h1>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
