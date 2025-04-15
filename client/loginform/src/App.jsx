
// import './App.css'
// // import Footer from './components/Footer'
// import Navbar from './components/Navbar'



// function App() {


//   return (
//     <>
//       <Navbar/>


//       {/* <Footer/> */}
//     </>
//   )
// }

// export default App


// src/App.js
import React from 'react';
 import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Register from './pages/RegisterFrom';
import Login from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

