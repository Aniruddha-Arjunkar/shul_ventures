import { Routes , Route } from "react-router"

import './App.css'

import Layout from './components/Layout.jsx'
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Services from "./views/Services.jsx";
import Jobs from "./views/Jobs.jsx";
import Contact from "./views/Contact.jsx";

function App() {
  return (
    <Routes>     
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/services" element={<Services />} />
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
