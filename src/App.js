import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
// import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Action from './redux/Action'

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

function App() {
  return (
    <div className="App">
    {/* <Action/> */}
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Home" element={<Home />} />
        
      </Routes>
    </Suspense>
  </Router>
 
    </div>
  );
}

export default App;
