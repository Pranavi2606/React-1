import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { Wordcount } from './components';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wordcount />
);
reportWebVitals();
