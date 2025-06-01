import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'



const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element= <Home/> />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/gallery" element={<div>Gallery Page</div>} />
          <Route path="/facilities" element={<div>Facilities Page</div>} />
          <Route path="/mandatory-public-disclosure" element={<div>Mandatory Public Disclosure Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
       
      </div>
    </Router>
  )
}

export default App