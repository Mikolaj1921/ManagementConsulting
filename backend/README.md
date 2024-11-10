# Struktura back-endu

backend/
├── node_modules/               # Folder z zainstalowanymi zależnościami (generowany automatycznie)
├── src/                        # Katalog z kodem źródłowym
│   ├── config/                 # Konfiguracja aplikacji (np. połączenie z DB, JWT, środowisko)
│   │   ├── db.js               # Połączenie z bazą danych
│   │   ├── jwtConfig.js        # Konfiguracja JWT (sekret, czas ważności tokenów)
│   │   └── serverConfig.js     # Ustawienia serwera (port, cors, itp.)
│   ├── controllers/            # Logika obsługi żądań i odpowiedzi
│   │   ├── authController.js   # Rejestracja, logowanie, resetowanie hasła
│   │   ├── chatController.js   # Obsługa wiadomości w czacie (WebSocket/Firebase)
│   │   ├── newsController.js   # Publikowanie i zarządzanie wiadomościami
│   │   ├── clientController.js # Zarządzanie klientami
│   │   ├── documentController.js # Zarządzanie dokumentami
│   │   ├── servicesController.js # Usługi i cennik
│   │   ├── knowledgeBaseController.js # Baza wiedzy (FAQ, artykuły)
│   │   ├── notificationController.js # Powiadomienia email/SMS
│   │   └── adminController.js  # Funkcje panelu administracyjnego
│   ├── models/                 # Modele bazy danych
│   │   ├── user.js             # Model użytkownika (Tabela: users)
│   │   ├── message.js          # Model wiadomości (Tabela: messages)
│   │   ├── news.js             # Model wiadomości (Tabela: news)
│   │   ├── client.js           # Model klienta (Tabela: clients)
│   │   ├── document.js         # Model dokumentów (Tabela: documents)
│   │   ├── service.js          # Model usług (Tabela: services)
│   │   ├── knowledgeBase.js    # Model bazy wiedzy (Tabela: knowledge_base)
│   │   └── notification.js     # Model powiadomień (Tabela: notifications)
│   ├── routes/                 # Trasy API
│   │   ├── authRoutes.js       # Trasy logowania, rejestracji, resetowania hasła
│   │   ├── chatRoutes.js       # Trasy do obsługi czatu (np. wysyłanie wiadomości)
│   │   ├── newsRoutes.js       # Trasy do publikowania wiadomości
│   │   ├── clientRoutes.js     # Trasy do zarządzania klientami
│   │   ├── serviceRoutes.js    # Trasy do usług i cenników
│   │   ├── knowledgeBaseRoutes.js # Trasy do bazy wiedzy (FAQ, artykuły)
│   │   ├── notificationRoutes.js # Trasy do powiadomień (email/SMS)
│   │   └── adminRoutes.js      # Trasy panelu administracyjnego
│   ├── middleware/             # Middleware (autoryzacja, walidacja, itp.)
│   │   ├── authMiddleware.js   # Sprawdzanie JWT
│   │   ├── errorMiddleware.js  # Obsługa błędów (np. nieautoryzowany dostęp)
│   │   └── fileUploadMiddleware.js # Obsługa przesyłania plików (np. dokumentów)
│   ├── utils/                  # Funkcje pomocnicze (np. wysyłanie e-maili, SMS)
│   │   ├── emailService.js     # Funkcje do wysyłania e-maili (Nodemailer)
│   │   ├── smsService.js       # Funkcje do wysyłania SMS-ów (Twilio)
│   │   └── fileService.js      # Funkcje do obsługi plików (upload, zapis)
│   ├── .env                    # Zmienne środowiskowe (np. dane dostępowe do bazy)
│   ├── server.js               # Główny plik uruchamiający aplikację
│   └── package.json            # Zależności projektu i konfiguracja skryptów
├── package-lock.json           # Lock file z dokładnymi wersjami zależności
└── package.json                # Plik konfiguracyjny zależności, skryptów, informacji o projekcie
