import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';
import logo from './Logo.png';
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class DefaultPage extends Component {

    render() {

        return (
          <div>
          <div class="row">
            <div class="column">
                    <img src={logo} width="200" height="100" />
            <div class="column">
                <h1>Fitness Friend</h1>
            </div>
          </div>


          </div>
          <ul className="header">
            <li><Link to="/main/fitness">Fitness</Link></li>
            <li><Link to="/main/nutrition">Nutrition</Link></li>
            <li><Link to="/main/info">Info</Link></li>
          </ul>
          <div className="content">
          <div>
          <Button>
          Fitness Plan
          </Button>
          <Button>
          Nutrition Plan
          </Button>
          <Button>
              Edit Info
          </Button>
          </div>
          </div>
          </div>
        ) 
    }

}

export default DefaultPage;