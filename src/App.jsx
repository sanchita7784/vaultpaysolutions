import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import GrokLandingPage from './Vspl/vspl';
import MissionSection from './Company/Companyhome';
import SpeakersSection from './Components/SpeakerSection';
import PurposeSection from './Careers/career';
import CRM from './CRM/crm';
import ContactUsSection from './Contact-us/Contact';
import PageNotFound from './Components/NotFound';
import LoginPage from './Login And signup/Login';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import SignupPage from './Login And signup/Signup';
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for LoginPage without Navbar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* Routes with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vspl" element={<GrokLandingPage />} />
          <Route path="/company" element={<MissionSection />} />
          <Route path="/speaker" element={<SpeakersSection />} />
          <Route path="/career" element={<PurposeSection />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/contact" element={<ContactUsSection />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;