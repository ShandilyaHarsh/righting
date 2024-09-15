import './App.css';
import Navbar from './components/js/navbar';
import Landing from './pages/landing_page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import React, { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInPlatform, setLoggedInPlatform] = useState(null);

  const handleLoginTwitter = () => {
    setIsLoggedIn(true);
    setLoggedInPlatform('Twitter');
    // Add Twitter-specific login logic here
    console.log('Logged in with Twitter');
    // You might want to add additional logic here, like redirecting to the home page
  };

  const handleLoginLinkedIn = () => {
    setIsLoggedIn(true);
    setLoggedInPlatform('LinkedIn');
    // Add LinkedIn-specific login logic here
    console.log('Logged in with LinkedIn');
    // You might want to add additional logic here, like redirecting to the home page
  };
  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} loggedInPlatform={loggedInPlatform} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
        <Route 
            path="/" 
            element={
              <Landing 
                onLoginTwitter={handleLoginTwitter} 
                onLoginLinkedIn={handleLoginLinkedIn} 
              />
            } 
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;