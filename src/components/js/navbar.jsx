import React from 'react';
import logo from '../../assets/righting-logo-without-text.png'

const Navbar = () => {
  return (
    <nav className=''>
      <div className=''>
        <div className='bg-custom-navy px-20'>
          <img src={logo} alt="Righting Logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
