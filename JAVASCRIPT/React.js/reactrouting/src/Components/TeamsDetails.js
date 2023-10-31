import { Component } from "react";

class TeamsDetails extends Component{
    teamName="Delhi Capitals";
 
    baseLocation="New Delhi";

    teamCaptain="YTA";

    componentDidMount(){
        console.log.apply("TeamsList components mounted....");
    }

    componentDidUpdate(){
        console.log("TeamsList components has updated....");
    }

    componentWillUnmount(){
        console.log("TeamsList compountes is unmounted....")
    }


    render(){
        return (
        <div>
            <centre>
                <form>
                    <label>
                        Team name
                    </label>
                    <input type="text" value={this.teamName}/><br></br>
                    <label>Team Captain</label><input type="text" value={this.teamCaptain}/><br></br>
                    <label>Base location</label>
                    <select size="1" name="base_location" value={this.baseLocation}>
                        <option value="MI">Mumbai</option>
                        <option value="CSK">Chennai</option>
                        <option value="RCB">Royal Challengers Bangalore</option>
                        <option value="KKR">Kolkata Knight Riders</option>
                        <option value="RR">Rajasthan Royals</option>
                        <option value="SRH">SunRisers Hyderabad</option>
                    </select><br></br>
                </form>
            </centre>
        </div>)
    }
}
export default TeamDetails;