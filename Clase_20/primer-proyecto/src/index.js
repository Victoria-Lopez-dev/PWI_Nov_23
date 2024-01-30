import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pagina2 from './pages/pag2'
//import App from './pages/pagina1/App';//App.js (puedo obviar la extension .js)
//import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{ /*    <App />*/}
<Pagina2/>
  </React.StrictMode>
);

//documento que se conecta por medio del DOM con el HTML
