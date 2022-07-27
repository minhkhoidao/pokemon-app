import { Container } from 'react-bootstrap';
import Navbar from '@/components/Navbar';
import Router from '@/config/router';
import React from 'react';

const App: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Router />
    </Container>
  );
};
export default App;
