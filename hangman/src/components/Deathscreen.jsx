import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeathScreen = ({ message, route }) => {
  const navigate = useNavigate();
  route = "/game";

  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '2em',
    zIndex: 1000,
    cursor: 'pointer',
  };

  const handleClick = () => {
    navigate(route);
  };

  return <div style={style} onClick={handleClick}>{message}</div>;
};

export default DeathScreen;