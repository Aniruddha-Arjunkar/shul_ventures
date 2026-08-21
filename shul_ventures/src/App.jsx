import { Routes , Route } from "react-router"

import './App.css'

import Layout from './components/Layout.jsx'
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Services from "./views/Services.jsx";
import Jobs from "./views/Jobs.jsx";
import Contact from "./views/Contact.jsx";

import ServiceDetails from "./views/Service_Details/serviceDetails.jsx";

function App() {
  return (
    <Routes> 
     <Route element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="services" element={<Services />} />
       <Route path="jobs" element={<Jobs />} />
       <Route path="contact" element={<Contact />} />
       
        {/* Dynamic Parameter (Thapa Technical Youtube Video)*/}
       <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}/>   

     </Route>
    </Routes>
  )
}

export default App
