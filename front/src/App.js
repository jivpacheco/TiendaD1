import './App.css';
import React from 'react';
import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';
import Home from './componentes/Home';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Routes from 'react-router-dom';
// import Route from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid' >
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          </Routes>
        </div>
        <Footer />

      </div>
    </Router>

  );
}

export default App;
