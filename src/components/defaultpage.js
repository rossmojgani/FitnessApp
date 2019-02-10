import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';
import logo from './Logo.png';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import CustomDayCell from './customDayCell';

class DefaultPage extends Component {

    handleFitnessPlan (input) => {
    event.preventDefault();
    fetch('http://localhost:8000', {
    method: "POST",
    headers: {'Content-type': 'application/json'},
    body: data
        }).then(function(response){
            return response.json();
        })
        .then(function(output){
        console.log(output);
        window.location.href = output.redirect;
        });
    }

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
          <ButtononClick = {this.handlefitnessPlan}>Fitness Plan</Button>
          <Button>
              Nutrition Plan
          </Button>
          <Button>
              Edit Info
          </Button>
          <div style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 34}}>
        
          </div>
          <c1>
            <WeekCalendar scaleHeaderTitle = "Workout Plan" 
            scaleUnit = {1800} scaleFormat = ' ' dayFormat = 'dddd' columnSpacing={2} cellHeight = {250}
            dayCellComponent={CustomDayCell} numberOfDays= {7}/>
          </c1>
          </div>
          </div>
          </div>
        ) 
    }

}


export default DefaultPage;

