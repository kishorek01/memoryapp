import React,{Component} from "react";
import "./home.css";

export default class Home extends Component{
  constructor(props){
    super(props);

    this.checkuser();
  }
  checkuser(){
    if(!localStorage.getItem("token")){
      this.props.history.push("/");
    }
  }

  render(){
    return(
      <div className={"homediv"}>
      <div>Home Bar
      </div>
      </div>
    );
  }
}
