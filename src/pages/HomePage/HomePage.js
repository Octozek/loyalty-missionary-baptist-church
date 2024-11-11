// src/pages/HomePage/HomePage.js

import React from 'react';
import CountdownSection from '../../components/CountdownSection';

const HomePage = () => (
  <div
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/church-bg.jpg'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <h1>Welcome to Loyalty Missionary Baptist Church</h1>
    <CountdownSection />
  </div>
);

export default HomePage;
