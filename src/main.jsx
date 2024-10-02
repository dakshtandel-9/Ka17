import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './Home/HomePage';
// import Navbar from './Navbar';
import Footer from './Footer';

// Render the application
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
