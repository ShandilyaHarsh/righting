import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/righting-logo-without-text.png'

const Navbar = ({ isLoggedIn, loggedInPlatform, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className=''>
      <div className=''>
        <div className='bg-custom-navy px-20 flex justify-between'>
          <img src={logo} alt="Righting Logo" />
          {isLoggedIn && (
          <div className='text-white'>
            <div className="flex justify-end items-center w-full h-full">
              <i 
                className="fas fa-sign-out-alt text-xl cursor-pointer" 
                aria-hidden="true" 
                title="Sign Out"
                onClick={handleSignOut}
              ></i>
            </div>
          </div>
        )}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
