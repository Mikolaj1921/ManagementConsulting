// Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <div className="form-section">
        <h2>Tutaj możesz zostawić nam swoją wiadomość</h2>
        <form>
          <label htmlFor="name">Nazwa *</label>
          <input type="text" id="name" required />

          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" required />

          <label htmlFor="message">Wiadomość *</label>
          <textarea id="message" required></textarea>

          <button type="submit">Wyślij</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>Kontakt:</h2>
        <p className="contact-item"><strong>Management Consulting</strong></p>
        <p className="contact-item"><strong>Telefon:</strong> +48 518 201 274</p>
        <p className="contact-item">
          <strong>E-mail:</strong> <a href="mailto:halinamelnik19@gmail.com">halinamelnik19@gmail.com</a>
        </p>
        <p className="contact-item"><strong>Adres:</strong> ul. Czarnieckiego 2, Przemyśl, Polska</p>


        <div className="map">
          {/* Mapa Google osadzona jako iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.239368121806!2d22.770166615715665!3d49.78461977938426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b3c089345b8b1%3A0x5c8be8a20a11b5d!2sStefana%20Czarnieckiego%202%2C%2037-700%20Przemy%C5%9Bl%2C%20Poland!5e0!3m2!1spl!2spl!4v1638997123456!5m2!1spl!2spl"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa Google - Lokalizacja firmy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
