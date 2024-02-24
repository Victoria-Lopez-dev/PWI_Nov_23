import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ruteo from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ruteo />
  </React.StrictMode>
);

//apenas reproduce el proyecto se va a ver el codigo de Router para saber que componente mostrar.
//y en este ruteo tenemos el "mapita" de que acorde al pasaje que coloquemos en el browser, que componente reproducir.