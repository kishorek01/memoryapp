import React,{Component} from "react";
import "./landing.css";
import { GoogleLogin,GoogleLogout } from 'react-google-login';
import Parse from 'parse/dist/parse.min.js';

const client_id="1009752487014-bic5dodret05eode81rkoecfk1pg0c3n.apps.googleusercontent.com";


export default class Landing extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
    this.checkuser();
    this.responseGoogle=this.responseGoogle.bind(this);
  }
  checkuser(){
    if(localStorage.getItem("token")){
      this.props.history.push("/home");
      //
    }
  }
  async addPerson() {
   try {
     const Person = new Parse.Object('User');
     Person.set('name', 'John');
     Person.set('email', 'john@back4app.com');
     await Person.save();
     this.checkuser();
   } catch (error) {
     console.log('Error saving new person: ', error);
   }
 }
  responseGoogle(response){
    if(response){
      let userInfo = {
     name: response.profileObj.name,
     emailId: response.profileObj.email,
   };
   localStorage.setItem("token",JSON.stringify(response.tokenObj));
   localStorage.setItem("userInfo",JSON.stringify(userInfo));
   this.setState({ userInfo, isLoggedIn: true },()=>{

     this.addPerson();
   });
    }
    console.log(response);
    console.log(this.state);

  }
  render(){
    return(
      <div className={"landdiv"}>
      <div className={"firstdiv"}>
      </div>
      <div>
      <GoogleLogin
    clientId={client_id}
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

      </div>
      </div>
    );
  }
}
