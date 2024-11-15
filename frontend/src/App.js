import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import RoutingConfig from './routes'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header/> 
        <RoutingConfig /> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
