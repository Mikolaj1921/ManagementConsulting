// NewsList.jsx
import React, { useState, useEffect } from 'react';
import './NewsList.css';

function NewsList() {
  const [news, setNews] = useState([]);

  // Na razie będziemy symulować pobieranie wiadomości z API
  useEffect(() => {
    // Symulacja pobierania danych
    const fetchNews = () => {
      const fetchedNews = [
        { id: 1, title: "Wiadomość 1", content: "Treść wiadomości 1" },
        { id: 2, title: "Wiadomość 2", content: "Treść wiadomości 2" },
        { id: 3, title: "Wiadomość 3", content: "Treść wiadomości 3" },
      ];
      setNews(fetchedNews);
    };

    fetchNews();
  }, []);

  return (
    <div className="news-list">
      <h1>Aktualności</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
