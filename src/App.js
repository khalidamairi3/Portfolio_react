

import * as React from 'react';
import Header from './components/Header';
import About from './components/About';
import Button from '@mui/material/Button';
import Projects from './components/Projects';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

