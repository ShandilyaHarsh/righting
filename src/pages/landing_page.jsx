import React from 'react';
import LoginButton from '../components/js/login-button';

const Landing = ({ onLoginTwitter, onLoginLinkedIn }) => {
  return (
    <div className='my-20'>
      <div>
        <div className="hero-text flex flex-col h-60">
            <div className="flex justify-center">
            <div className="hero-heading text-7xl pl-20 font-bold font-inter mt-20 mb-12"> Righting</div>
            <div className="hero-heading text-7xl font-bold text-dark-blue font-inter mt-20 mb-4"> .ai</div>
            </div>
            <div className="flex justify-center mb-4">
            <div className="hero-sub-heading text-3xl pl-20 px-2 font-bold font-inter"> Convert linkedin posts to  </div>
            <div className="hero-sub-heading text-3xl text-dark-blue font-bold font-inter"> viral</div>
            <div className="hero-sub-heading text-3xl pl-2 font-bold font-inter"> tweets in a click  </div>
            </div>
            <div className="flex justify-center">
            <div className="hero-sub-heading text-3xl pl-20 px-2 font-bold font-inter"> No more  </div>
            <div className="hero-sub-heading text-3xl text-dark-blue font-bold font-inter"> scrolling</div>
            <div className="hero-sub-heading text-3xl pl-2 font-bold font-inter"> after posting. </div>
            </div>
            
            <div className="buttons flex px-20 mt-20 justify-center">
            <LoginButton 
                  href="#" 
                  text="Login Twitter" 
                  onClick={onLoginTwitter}
                />
                <LoginButton 
                  href="#" 
                  text="Login Linkedin" 
                  onClick={onLoginLinkedIn}
                />
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Landing;
