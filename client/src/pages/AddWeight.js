import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

export default class AddWeight extends Component {
  constructor() {
    super();
    this.state = {
      week: '',
      weight: ''
    };
    this.handleSetWeek = this.handleSetWeek.bind(this);
    this.handleSetWeight = this.handleSetWeight.bind(this);
    this.submitWeight = this.submitWeight.bind(this);
  }
  handleSetWeek(e) {
    this.setState({week: e.target.value});
  }
  handleSetWeight(e) {
    this.setState({weight: e.target.value});
  }
  submitWeight(e) {
    e.preventDefault();
    const weightToSave = {week: this.state.week, weight: this.state.weight};
    console.log(this.state);
    axios.post('http://localhost:3030/add-weight', weightToSave)
      .then((data) => {
        window.location = `/weight-summary`
      })
      .catch((err) => {
        console.log({'error': err.response.error});
      });
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup className="Login-group">
          <input 
            onChange={this.handleSetWeek} 
            placeholder="Enter Week #" 
            type="text"
            value={this.state.week}
          />
          </FormGroup>
          <FormGroup className="Login-group">
          <input 
            onChange={this.handleSetWeight} 
            placeholder="Enter Weight" 
            type="text"
            value={this.state.weight}
          />
          </FormGroup>
          <button className="btn btn-sm btn-success SubmitButton" type="submit" onClick={this.submitWeight}>Submit Weight</button>
          <br />
          <Link to='/weight-summary'><button  className="btn btn-default btn-sm ButtonMargin">Return to Weight Summary</button></Link>
        </form>
      </div>
    )
  }
}