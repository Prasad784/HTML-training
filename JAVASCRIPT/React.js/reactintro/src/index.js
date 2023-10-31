import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Components/ChangePageColor';
//import TeamsList from './Components/TeamList';
//import VenusList from './Components/VenucList';
//import TeamDetailsWithUseState from './Components/TeamDetailsWithUseState';
import reportWebVitals from './reportWebVitals';
import ChangePageColor from './Components/ChangePageColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    //<TeamsList/>
    //<VenusList/>
   // <TeamDetailsWithUseState />
    <ChangePageColor/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
