import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styling/App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import About from './About'
import BlogContainer from './BlogContainer'
import ProjectContainer from './ProjectContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<BlogContainer />} />
          <Route path='projects' element={<ProjectContainer />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
