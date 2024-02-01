import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './paginas/Inicio';
import Pagina2 from './paginas/Pagina2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Inicio />
    {/* <Pagina2/>*/}
  </React.StrictMode>
);


