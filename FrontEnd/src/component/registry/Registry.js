import React, {useState , useEffect} from 'react'
import "./style.css"
import axios from 'axios'
import {Link} from 'react-router-dom';

export default function registry(props) {



    let successful = false

    

   

  
    return (
        <div>
           <div className="container">
               <div className="login-main">
                    <h3>LOGIN IN</h3>
                    <input type="text" className='form-control' placeholder='UserName'/>
                    <input type="text" className='form-control' placeholder='Password'/>
                    <Link  id='navLink' to="/Home"><button className='btn btn-primary'>LOGIN IN</button></Link> 
               </div>
           </div>
        </div>
    )
}
