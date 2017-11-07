import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

export default class WeightSummary extends Component {
  constructor() {
    super();
    this.state = {
      weights: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3030/weight-summary')
      .then((data) => {
        this.setState({weights: data.data});
      })
      .catch((err) => {
        console.log({'error': err.response.error});
      });
  }

  render() {
    const { weights } = this.state;
    return(
      <div>
        <div className="DataInLIne">
          <h5>Week: Weight</h5>
        </div>
        {weights.map((weight) => {
          return (
            <div key={weight._id} className="DataInLine">
              <p>{weight.week}:&nbsp;</p>
              <p>{weight.weight}</p>
            </div> 
          )
        })}
        <Link to='/add-weight'><button className="btn btn-default btn-sm">Add weekly weight</button></Link>
      </div>
    )
  }

}