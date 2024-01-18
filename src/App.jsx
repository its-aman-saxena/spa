import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='f-heading'>
        <h1>About</h1>
        <p>I am passionate about programming and wanna explore more fields in these domains.</p>
      </div>

      <Features />
      <Services />
      <Contact />
    </div>
  )
}

export default App
