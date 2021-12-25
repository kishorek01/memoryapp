import * as React from "react";
import Main from "./main/main";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = '2qWUxzgpSftXlbGyc5eC6L0b1dmsRV7UX71kRcPR';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'XpjIUh9YJwUqdecLvcWhz58EayQ25esycORLigdf';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
class App extends React.Component {

  render(){
  return (
    <div className="App">
<Router >
  <Main />
  </Router>
    </div>
  );
}
}

export default App;
