import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import AppForm from './pages/AppForm';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Review from './pages/Review';

function App() {
  return(
    <Container className='min-vw-100 min-vh-100 m-0 p-0 bg-secondary d-flex flex-column align-items-center justify-content-start'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<AppForm />} />
        <Route path="review" element={<Review />} />
      </Routes>
    </Container>
  );
};

export default App;


/*
  - Connect database to backend (backend)
  - Save user names and emails to database (backend)
  - Make /submitDocReview endpoint which submits doctor review to database (backend)
  - get "npm start" script to work and start both backend and frontend on backend directory
*/