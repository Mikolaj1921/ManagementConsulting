import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-us-section">
        <h2 className="about-us-title">O nas</h2>
        <p className="about-us-description">
          Firma Management Consulting jest wiodącą firmą doradczą specjalizującą się w zakresie legalizacji pracy i pobytu dla cudzoziemców, 
          a także wsparciu w zakresie zakładania firm w Polsce. Naszym celem jest zapewnienie kompleksowej obsługi dla osób oraz firm 
          zatrudniających cudzoziemców, a także wsparcie w uzyskaniu wymaganych zezwoleń.
        </p>

        <div className="about-us-service">
            <h3 className="service-title">Zakres podstawowych usług:</h3>
            <ul className="service-list">
                <li className="custom-dot">Zezwolenie na pracę</li>
                <li className="custom-dot">Pomoc dla firm zatrudniających cudzoziemców</li>
                <li className="custom-dot">Pomoc w założeniu firmy</li>
                <li className="custom-dot">Zezwolenie na pobyt czasowy i stały</li>
                <li className="custom-dot">Obliczenie z PIT</li>
                <li className="custom-dot">Wniosek o przydzielenie pracy</li>
            </ul>
        </div>

        <div className="about-us-additional-services">
          <h3 className="service-title">Usługi dodatkowe:</h3>
          <ul className="service-list">
            <li>Pomoc i pełna obsługa uzyskania Karty (tymczasowa, stała)</li>
            <li>Doradztwo w założeniu i rozwoju prywatnego przedsiębiorstwa w Polsce</li>
            <li>Obsługa poczty firmowej, księgowość, obsługa kadrowa</li>
            <li>Zezwolenie na pracę dla cudzoziemców spoza UE</li>
            <li>Pomoc i doradztwo w zakresie uzyskania, wymiany, przedłużenia Karty Polaka</li>
            <li>Delegowanie cudzoziemców do innych krajów UE</li>
            <li>Wypełnianie wszelkich wniosków i pisanie pism</li>
            <li>Tłumaczenie dokumentów (zwykłe i notarialne)</li>
            <li>Uzyskanie informacji o wydaleniu, konsultacje</li>
            <li>I inne usługi</li>
          </ul>
        </div>

        <div className="about-us-contact">
          <p>
            Jeśli masz dodatkowe pytania, prosimy o kontakt. Szczegóły znajdziesz w zakładce{' '}
            <a href="/contact" className="contact-link">KONTAKT</a>.
          </p>
        </div>

        <div className="about-us-director">
          <h3 className="director-title">Główna Dyrektor:</h3>
          <p className="director-name">Melnyk Halina</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
