import React, { Component } from 'react';
import {Link} from "react-router-dom";

class DefaultPage extends Component {

    render() {

        return (
            <div>
          <h1>Fitness Friend</h1>
          <ul className="header">
            <li><Link to="/main/fitness">Fitness</Link></li>
            <li><Link to="/main/Nutrition">Nutrition</Link></li>
            <li><Link to="/main/Info">Info</Link></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
        ) 
    }

}

export default DefaultPage;