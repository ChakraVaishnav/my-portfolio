import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

import CursorGlow from './components/CursorGlow';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </>
);

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <CursorGlow />
        <Router>
          <SmoothScroll>
            <Box as="main" className="bg-near-black min-h-screen selection:bg-pure-white selection:text-near-black">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journey" element={<Journey />} />
              </Routes>
            </Box>
          </SmoothScroll>
        </Router>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
