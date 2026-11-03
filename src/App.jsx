import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Loader from './components/Loader';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <SmoothScroll>
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" onLoadingComplete={() => setLoading(false)} />
          ) : (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="skills" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="experience" element={<Experience />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
