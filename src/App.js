import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Index from './Components/Index'
import Contact from './Components/Contact'






function App() {
  return (
    <div className="App text-center ">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/Contact' component={Contact} />

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
