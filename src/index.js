// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from './App'
import Edit from './Edit'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import './index.css';


var hist = createBrowserHistory();

class Routes extends Component {
    state = {
        
    }
    render(){
        return (
            <Router history={hist}>
            <Switch>
             <Route path="/" component={App} exact/>
             <Route path="/edit" component={Edit} exact />
            </Switch>
          </Router>
        )
    }
}


ReactDOM.render(
<Routes />,
  document.getElementById("root")
);
