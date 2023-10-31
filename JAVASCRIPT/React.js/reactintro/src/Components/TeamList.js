import { Component } from 'react';
import './TeamsList.css';

class TeamsList extends Component {

    teamsCount=11;
    getTeamsCount(){
        return this.teamsCount;
    }

    render() {
        return (
        <div className='TeamsList'>
        <center>
            <b>Count of teams</b>{this.getTeamsCount}
            <b>List of teams in IPL 2023</b>
        <br></br>
        <ul>
            <li>CSK</li>
            <li>RCB</li>
            <li>MI</li>
            <li>SRH</li>
            <li>KKR</li>
            <li>DC</li>
            <li>GT</li>
            <li>RR</li>
            <li>LSG</li>
            <li>PK</li>
        </ul>
        </center>
        </div>
        )   
    }
}

export default TeamsList;