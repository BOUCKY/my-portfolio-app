import React from 'react';
import '../styling/App.css';
import About from './About'
import NavBar from './NavBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
