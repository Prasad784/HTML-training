import { Component } from "react";

class ChangePage extends Component{
    render(){
        return(<div id="mnt">
            <b>In Mounting phase</b>
        </div>)
    }
    componentDidMount(){
       let dv=document.getElementById("mnt");
       dv.innerHTML +="<b><u>Component mounted</u></b>"
    }
}

export default ChangePageColor;