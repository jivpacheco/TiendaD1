import './App.css';
import React from 'react';
import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';
import Home from './componentes/Home';

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
