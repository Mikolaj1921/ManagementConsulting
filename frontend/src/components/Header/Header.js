import React from 'react';
import { Link } from 'react-router-dom'; // Dodajemy import Link
import logo from '../../assets/images/logoFirmy.png';
import './Header.css';

function Header() {
  return (
    <header>
        <div className="logo-container">
            <img src={logo} alt="Firma Logo" className="logo" /> {/* Używamy zaimportowanego logo */}
        </div>
    
      <nav>
        <ul>
          <li><Link to="/">Strona główna</Link></li> {/* Używamy Link do nawigacji */}
          <li><Link to="/news">Aktualności</Link></li> 
          <li><Link to="/aboutus">O nas</Link></li>
          <li><Link to="/contact">Kontakt</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
