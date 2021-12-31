import * as React from "react";
import Main from "./main/main";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

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
