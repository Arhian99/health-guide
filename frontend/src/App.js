import { Container } from 'react-bootstrap';
import MainButton from './components/MainButton';
import NextButton from './components/NextButton';
import BackButton from './components/BackButton';
import Home from './pages/Home';
import AppForm from './pages/AppForm';
import AppProgressBar from './components/AppProgressBar';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';

function App() {
  return(
    <Container className='min-vw-100 min-vh-100 m-0 p-0 bg-secondary d-flex flex-column align-items-center justify-content-start'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<AppForm />} />
      </Routes>
      {/* <Home /> */}
      {/* <AppForm /> */}
      {/* <AppProgressBar completed="10"/> */}
    </Container>
    // <Test />
  );
};

export default App;


/*
* - Make /sendEmail endpoint which sends email with summary of responses in the form AND saves the user email address, age, and phone number (backend)
  - Connect database to backend (backend)
  - Save user names and emails to database (backend)
  - Make Dr Review Page (frontend)
  - Make /submitDocReview endpoint which submits doctor review to database (backend)
  - get "npm start" script to work and start both backend and frontend on backend directory
*/