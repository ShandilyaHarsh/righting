import React from 'react';
import LoginButton from '../components/js/login-button';

const Home = () => {
  return (
    <div className='my-20'>
      <div>
        <div className="hero-text flex flex-col h-60">
            <div className="flex">
            <div className="hero-heading text-7xl pl-20 font-bold font-inter mt-20 mb-4"> Righting</div>
            <div className="hero-heading text-7xl font-bold text-dark-blue font-inter mt-20 mb-4"> .ai</div>
            </div>
            <div className="flex">
            <div className="hero-sub-heading text-3xl pl-20 px-2 font-bold font-inter"> Convert linkedin posts to  </div>
            <div className="hero-sub-heading text-3xl text-dark-blue font-bold font-inter"> viral</div>
            <div className="hero-sub-heading text-3xl pl-2 font-bold font-inter"> tweets in a click  </div>
            </div>
            <div className="buttons flex px-20 mt-20">
                <LoginButton href="/login" text="Login Twitter" />
                <LoginButton href="/login" text="Login Linkedin" />
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
