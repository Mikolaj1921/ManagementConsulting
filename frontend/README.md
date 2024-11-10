project-root/


├── public/
│   ├── index.html               # Główna strona HTML, do której wstrzykiwany jest kod React
│   ├── favicon.ico              # Ikona wyświetlana w zakładce przeglądarki
│   └── manifest.json            # Konfiguracja Progressive Web App (PWA)



├── src/
│   ├── assets/                  # Pliki statyczne (obrazy, style)
│   │   ├── images/              # Obrazy, ikony itp.
│   │   └── styles/              # Globalne style CSS
│   │       ├── global.css       # Globalne style aplikacji
│   │       └── variables.css    # Zmienne CSS (opcjonalnie)

│   ├── components/              # Reużywalne komponenty UI
│   │   ├── Button/              # Przycisk
│   │   │   ├── Button.jsx       # Kod komponentu przycisku
│   │   │   └── Button.css       # Stylizacja przycisku
│   │   ├── Modal/               # Okno modalne
│   │   │   ├── Modal.jsx        # Kod komponentu modalnego
│   │   │   └── Modal.css        # Stylizacja okna modalnego
│   │   └── Navbar/              # Nawigacja (menu)
│   │       ├── Navbar.jsx       # Kod komponentu nawigacji
│   │       └── Navbar.css       # Stylizacja nawigacji

│   ├── features/                # Moduły aplikacji
│   │   ├── auth/                # Moduł autoryzacji
│   │   │   ├── Login.jsx        # Ekran logowania
│   │   │   ├── Login.css        # Stylizacja logowania
│   │   │   ├── Register.jsx     # Ekran rejestracji
│   │   │   ├── Register.css     # Stylizacja rejestracji
│   │   │   ├── ForgotPassword.jsx # Przypomnienie hasła
│   │   │   ├── ForgotPassword.css # Stylizacja przypomnienia hasła
│   │   │   └── authSlice.js     # Redux slice do zarządzania stanem autoryzacji

│   │   ├── chat/                # Moduł czatu
│   │   │   ├── Chat.jsx         # Główny komponent czatu
│   │   │   ├── Chat.css         # Stylizacja czatu
│   │   │   ├── ChatRoom.jsx     # Komponent pokoju czatowego
│   │   │   ├── ChatRoom.css     # Stylizacja pokoju czatowego
│   │   │   └── chatSlice.js     # Redux slice do zarządzania stanem czatu

│   │   ├── news/                # Moduł wiadomości firmowych
│   │   │   ├── NewsList.jsx     # Lista wiadomości
│   │   │   ├── NewsList.css     # Stylizacja listy wiadomości
│   │   │   ├── NewsDetail.jsx   # Szczegóły wiadomości
│   │   │   ├── NewsDetail.css   # Stylizacja szczegółów wiadomości
│   │   │   └── newsSlice.js     # Redux slice do zarządzania wiadomościami

│   │   ├── admin/                          # Panel administracyjny
│   │   │   ├── Dashboard.jsx               # Główny ekran panelu admina
│   │   │   ├── Dashboard.css               # Stylizacja dashboardu
│   │   │   ├── UserManagement.jsx          # Zarządzanie użytkownikami
│   │   │   ├── UserManagement.css          # Stylizacja zarządzania użytkownikami
│   │   │   ├── DocumentManagement.jsx      # Zarządzanie dokumentami
│   │   │   ├── DocumentManagement.css      # Stylizacja zarządzania dokumentami
│   │   │   └── adminSlice.js               # Redux slice dla stanu panelu admina

│   │   ├── services/                   # Moduł usług i cennik
│   │   │   ├── ServicesList.jsx        # Lista usług
│   │   │   ├── ServicesList.css        # Stylizacja listy usług
│   │   │   ├── ServiceDetail.jsx       # Szczegóły usługi
│   │   │   ├── ServiceDetail.css       # Stylizacja szczegółów usługi
│   │   │   └── servicesSlice.js        # Redux slice dla zarządzania usługami

│   │   ├── contact/             # Moduł kontaktowy
│   │   │   ├── Contact.jsx      # Formularz kontaktowy
│   │   │   ├── Contact.css      # Stylizacja formularza kontaktowego

│   │   ├── analytics/                      # Moduł analityki i raportów
│   │   │   ├── AnalyticsDashboard.jsx      # Dashboard analityczny
│   │   │   ├── AnalyticsDashboard.css      # Stylizacja dashboardu analitycznego
│   │   │   └── analyticsSlice.js           # Redux slice dla zarządzania analityką

│   │   ├── knowledge-base/             # Baza wiedzy
│   │   │   ├── KnowledgeList.jsx       # Lista artykułów
│   │   │   ├── KnowledgeList.css       # Stylizacja listy artykułów
│   │   │   ├── KnowledgeDetail.jsx     # Szczegóły artykułu
│   │   │   ├── KnowledgeDetail.css     # Stylizacja szczegółów artykułu
│   │   │   └── knowledgeBaseSlice.js   # Redux slice dla zarządzania bazą wiedzy

│   │   ├── notifications/              # System powiadomień
│   │   │   ├── Notifications.jsx       # Komponent powiadomień
│   │   │   ├── Notifications.css       # Stylizacja powiadomień
│   │   │   └── notificationsSlice.js   # Redux slice dla zarządzania powiadomieniami

│   │   └── client-panel/               # Panel klienta
│   │       ├── ClientDashboard.jsx     # Główny ekran panelu klienta
│   │       ├── ClientDashboard.css     # Stylizacja ekranu klienta
│   │       ├── DocumentList.jsx        # Lista dokumentów klienta
│   │       ├── DocumentList.css        # Stylizacja listy dokumentów
│   │       └── clientPanelSlice.js     # Redux slice dla stanu panelu klienta

│   ├── pages/                   # Strony główne (top-level routing)
│   │   ├── StartPanel/          # Strona startowa
│   │   │   ├── StartPanel.jsx   # Kod strony startowej
│   │   │   └── StartPanel.css   # Stylizacja strony startowej
│   │   └── Home.jsx             # Strona główna po zalogowaniu
│   │       └── Home.css         # Stylizacja strony Home
│   ├── hooks/                   # Custom hooks
│   │   └── useAuth.js           # Hook do zarządzania autoryzacją

│   ├── services/                # Obsługa API
│   │   ├── api.js               # Główne połączenie z API
│   │   ├── authService.js       # Usługi API do autoryzacji
│   │   ├── chatService.js       # Usługi API do czatu
│   │   └── notificationService.js # Usługi API do powiadomień

│   ├── store/                   # Konfiguracja Redux
│   │   ├── store.js             # Konfiguracja głównego store Redux
│   │   └── rootReducer.js       # Połączenie wszystkich slice'ów Redux

│   ├── App.js                   # Główny komponent aplikacji
|   ├── App.css                  # Stylizacja
│   ├── index.js                 # Punkt wejściowy aplikacji
│   └── routes.js                # Konfiguracja routingu
│
└── package.json                 # Plik konfiguracyjny projektu






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
