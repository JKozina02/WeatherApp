import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/favorite')}>Favorite</button>
    </div>
  );
};

export default NavigationBar;