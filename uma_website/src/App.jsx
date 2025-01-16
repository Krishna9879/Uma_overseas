import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

import './index.css';
import Courses from './pages/Courses/Courses';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import { PTEIELTSPage } from './pages/PTEIELTSPage/PTEIELTSPage';
import { ToursPage } from './pages/ToursPage/ToursPage';
import { VisaPage } from './pages/VisaPage/VisaPage';
import { MoneyExchangePage } from './pages/MoneyExchangePage/MoneyExchangePage';

import { StudyAbroadPage } from './pages/StudyAbroad/StudyAbroad';
import ExamBookingPage from './pages/ExamBooking/ExamBooking';


const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pteielts" element={<PTEIELTSPage />} />
          <Route path="/tourpage" element={<ToursPage />} />
          <Route path="/visapage" element={<VisaPage />} />
          <Route path="/moneyexchange" element={<MoneyExchangePage />} />
          <Route path="/exambooking" element={<ExamBookingPage />} />
          <Route path="/studyabroad" element={<StudyAbroadPage />} />
        </Routes>
        </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;