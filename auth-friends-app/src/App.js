// REACT
import React from 'react';

// COMPONENTS
import NavBar from './components/NavBar';

// STYLING
import './App.css';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppDiv>
      <NavBar />
    </AppDiv>
  );
}

export default App;
