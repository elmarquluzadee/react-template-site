import React from 'react';
import "./Navbar.css"
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <div >
    <Link to="/"><h1>Template</h1></Link>
    </div>
    <nav className='nav-continer'>
      <ul > 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li> 
      </ul>
    </nav>
    </div>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/contact" element={<Contact/>} />
   </Routes>
  </>
  );
};

export default Navbar;
