// StartPanel.jsx
import React from 'react';
import './StartPanel.css'; // Możesz dodać własne style

function StartPanel() {
  return (
    <div className="start-panel">
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

    </div>
  );
}

export default StartPanel;
