import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importujemy BrowserRouter
import RoutingConfig from './routes'; // Zmieniliśmy nazwę na RoutingConfig
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router> {/* Owijamy całą aplikację w Router */}
      <div className="App">
        <Header/> 
        <RoutingConfig /> {/* Używamy RoutingConfig do zarządzania trasami */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
