import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

/* 

yarn dev => correr en produccion
yarn install => para instalar las dependecias

yarn build => para generar la carpeta com archivos html,css y js

*/