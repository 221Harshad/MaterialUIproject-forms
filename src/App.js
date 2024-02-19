
import { Container } from '@mui/material';
import './App.css';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <div className='App'>
    <Container maxWidth="xs">
      <RegisterForm/>
    </Container>
    </div>
  );
}

export default App;
