import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Router from './config/router';

function App() {
  return (
    <Container>
      <Navbar />
      <Router />
    </Container>
  );
}
export default App;
