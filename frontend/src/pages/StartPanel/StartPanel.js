import React from 'react';
import logoImage from '../../assets/images/strgltlo.jpg';
import './StartPanel.css'; // Możesz dodać własne style


function StartPanel() {
  return (
    <div className="start-panel">
      {/* Sekcja tła */}
      <section className="hero-section">
        <div className="background" style={{ backgroundImage: `url(${logoImage})` }}></div> {/* Tło z rozmyciem */}
        <div className="content"> {/* Treść */}
          <h1 className="hero-title">Management Consulting</h1>
          <p className="hero-subtitle">Profesjonalne doradztwo i wsparcie w zakresie prawa i administracji.</p>
        </div>
      </section>

      <main>
        {/* Sekcja o nas */}
        <section id="about" className="about-section">
          <h2 className="section-title">Zakres podstawowych usług, które świadczymy:</h2>
          <ul className="service-list">
            <li>Zezwolenie na pracę.</li>
            <li>Pomoc dla firm zatrudniających cudzoziemców.</li>
            <li>Pomoc w założeniu firmy.</li>
            <li>Zezwolenie na pobyt czasowy i stały.</li>
            <li>Obliczenie z PIT.</li>
            <li>Wniosek o przydzielenie pracy.</li>
          </ul>
        </section>

        {/* Sekcja Dlaczego my */}
        <section id="why-us" className="why-us-section">
          <h2 className="section-title">Dlaczego my?</h2>
          <ul className="service-list">
            <li>Doświadczenie.</li>
            <li>Jakość.</li>
            <li>Gwarancja.</li>
            <li>Cena oraz wartość pracy.</li>
          </ul>
        </section>

        {/* Sekcja dodatkowych usług */}
        <section id="additional-services" className="additional-services-section">
          <h2 className="section-title">Ogólne informacje o głównych i dodatkowych usługach:</h2>
          <ul className="service-list">
            <li>Personel i biuro.</li>
            <li>Praca w Polsce.</li>
            <li>Zezwolenie na pracę.</li>
            <li>Pomoc dla firm zatrudniających cudzoziemców.</li>
            <li>Pomoc w założeniu firmy.</li>
            <li>Zezwolenie na pobyt czasowy i stały.</li>
            <li>Obliczenie z PIT.</li>
            <li>Wniosek o przydzielenie pracy.</li>
            <li>Delegacja (pełen pakiet dokumentów).</li>
            <li>Pomoc w zakresie uzyskania, przedłużenia i wymiany Karty Polaka.</li>
            <li>A także wiele innych usług.</li>
          </ul>
        </section>

        {/* Sekcja kontaktu */}
        <section id="contact" className="contact-section">
          <h2 className="section-title">Jak się z nami skontaktować?</h2>
          <p>Kliknij tutaj, aby <a href="/contact" className="contact-link">zobaczyć kontakt</a>.</p>
        </section>
      </main>
    </div>
  );
}

export default StartPanel;
