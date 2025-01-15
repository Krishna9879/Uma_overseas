import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About_us from './pages/About_us/About_us';
import './index.css';
import Courses from './pages/Courses/Courses';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About_us" element={<About_us />} />
        </Routes>
        </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;