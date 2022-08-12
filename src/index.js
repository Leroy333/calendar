import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
const setLocalStorage = [
    {"id": 1, "title":"Шашлыки", "people": "Иван Иванов, Петр Осипов", date: "1659964154"},
    {"id": 2, "title":"Сходить в бар", "people": "Екатерина Краснова, Иван Сергеев", date: "1659764154"},
    {"id": 3, "title":"Аквапарк", "people": "Александр Емельянов", date: "1659564154"},
    {"id": 2, "title":"Караоке", "people": "Екатерина Краснова, Иван Сергеев, Петр Осипов", date: "1658764154"},
]
localStorage.setItem('events', JSON.stringify(setLocalStorage))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App />


  </React.StrictMode>
);

 // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
