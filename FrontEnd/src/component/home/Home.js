import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './home.css'

export class Parent extends Component {
  
//Bootstrap Color : .text-primary  , .text-secondary , .text-success , .text-danger
// .text-warning , .text-info , .text-light , .text-dark , .text-muted , .text-white
    render() {
        return (
            <div>
                <div id='jum'>
                    
                </div>
                
                <div className="container">
                    <div className="main">
                        <div id="info">Welcome to the world of cars. On this site, we offer many cars and car accessories. We provide maintenance for you.</div>
                        <Link id="cars" to="/Cars"><div >CARS</div></Link>
                        <Link id="parts" to="/Parts"> <div >ACCESSORY</div></Link>
                        <Link id="mainte" to="/mainten"><div >ABOUT</div></Link>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Parent
