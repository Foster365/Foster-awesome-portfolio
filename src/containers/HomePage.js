import React from 'react';
import {Button, Title} from '../components/styled-components/index';
import '../static/css/styles.css';
function HomePage() {
  return (
    <div className = 'container'>
      <Title>Welcome to my portfolio</Title>
      <Button type='button' onClick={() => alert("Buenas")}>Buenas!!</Button>
    </div>
  );
}

export default HomePage;
