import logo from './logo.svg';

import './App.css';

import {BrowserRouter as Router,Routes, Route, Link}from 'react-router-dom';

import VenuesList from './Components/VenuesList';

import TeamsList from './Components/TeamsList';

import TeamDetails from './Components/TeamsDetails';

function App() {

  return (
  
  <Router>

    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <h1>welcome to react..</h1>

      </header>

      <Link to="/Venueslist ">list of Venues</Link>

      <Link to="/Teamslist ">List of teams</Link>

      <Link to="/TeamsDeatils ">Details of team</Link>

 

  <Routes>
    
    <Route exact path = "/VenuesList" element={<VenuesList/>}></Route>

    <Route exact path = "/TeamsList" element={<TeamsList/>}></Route>

    <Route exact path = "/TeamsDetails" element={<TeamsDetails/>}></Route>

  </Routes>
  </div>

    </Router>

  );

}

 

export default App;

 