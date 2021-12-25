import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Landing from "../components/landing"
import Home from "../components/home"
 export default class Main extends Component {
   static propTypes = {
       match: PropTypes.object,
       location: PropTypes.object,
       history: PropTypes.object
     };
   constructor(props){
     super(props);
   }
  render(){
  return (
  <Switch>
   <Route exact path="/" component={(props)=> <Landing {...props}/>}/>
   <Route exact path="/home" component={(props)=> <Home {...props}/>}/>
  </Switch>

  );
}
}
