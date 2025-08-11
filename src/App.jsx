import Header from './components/Header'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Router basename="/crdt">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/thematic-areas" element={<ThematicAreas />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/programs-courses" element={<ProgramsCourses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people/faculty" element={<Faculty />} />
        <Route path="/people/staff" element={<Staff />} />
        <Route path="/people/post-docs" element={<PostDocs />} />
        <Route path="/people/doctoral-scholars" element={<DoctoralScholars />} />
        <Route path="/people/alumni" element={<Alumni />} /> */}
      </Routes>
    </Router>
  )
}

export default App
