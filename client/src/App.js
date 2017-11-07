import React, { Component } from 'react';
import { Route }  from 'react-router-dom';

import  * as Pages from './pages'
import logo from './noun_12961_cc.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    }
  }

  componentWillMount() {
    if (localStorage.getItem('uuID')) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  }

  doLogout() {
    localStorage.setItem('uuID', '');
    window.location = '/';
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h3>Preggo Weight Tracker</h3>
          <img alt="preggo logo" className="App-logo" src={logo} />
          {loggedIn ? <div className="Inline-button">
            <button className="btn btn-primary btn-sm" onClick={this.doLogout}>Logout</button>
          </div> : null}
        </div>
        <Route path="/" exact component={ Pages.Login }></Route>
        <Route path="/create-user" component={ Pages.CreateAccount }></Route>
        <Route path="/weight-summary" component={ Pages.WeightSummary }></Route>
        <Route path="/add-weight" component={ Pages.AddWeight }></Route>
        {/* <Route path="/:week" component={ Pages.UpdateWeight }></Route> */}
      </div>
    );
  }
}

export default App;
