import React from 'react';
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
    <nav className='navbar'>
      <ul className='ul-nav-continer'> 
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

   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/contact" element={<Contact/>} />
   </Routes>
  </>
  );
};

export default Navbar;
