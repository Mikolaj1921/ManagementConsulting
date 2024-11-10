import React from 'react';
import './StartPanel.css'; // Możesz dodać własne style

function StartPanel() {
  return (
    <div className="start-panel">
      {/* Nagłówek panelu */}
      <header>
        <h1>Witamy na stronie firmy!</h1>
        <nav>
          <ul>
            <li><a href="#about">O nas</a></li>
            <li><a href="#services">Usługi</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      {/* Główna sekcja - treść */}
      <main>
        <section id="about">
          <h2>O nas</h2>
          <p>Nasza firma oferuje profesjonalne wsparcie w zakresie prawa, konsultingu i administracji.</p>
        </section>
        <section id="services">
          <h2>Nasze usługi</h2>
          <p>Świadczymy usługi doradcze, prawne i administracyjne dopasowane do potrzeb naszych klientów.</p>
        </section>
        <section id="contact">
          <h2>Kontakt</h2>
          <p>Skontaktuj się z nami za pomocą formularza lub telefonicznie.</p>
        </section>
      </main>

      {/* Stopka panelu */}
      <footer>
        <p>&copy; 2024 Firma ManagementConsulting. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default StartPanel;
