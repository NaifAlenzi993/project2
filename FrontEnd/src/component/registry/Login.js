import React, {useState , useEffect} from 'react'
import "./style.css"
import axios from 'axios'
import {Link} from 'react-router-dom';

export default function Login(props) {

 const [inputUsername, setInputUsername] = useState("")
 const [inputPassword, setInputPassword] = useState("")
 const [inputType, setInputType] = useState("")

    let successful = false

    const onClickHandle = async () =>{
        // console.log(inputUsername , inputPassword);
        const response = await axios.post(`http://localhost:5000/login`, {
            name : inputUsername , 
            password : inputPassword
        });

         console.log("login res",response.data);
        if (response.data.type == "Admin" || response.data.type == "User") {
            props.changeUser(response.data)
            successful = true
        }
    }

   

  
    return (
        <div>
           <div className="container">
               <div className="login-main">
                    <h3>LOGIN IN</h3>
                     <input  onChange={(e)=>{setInputUsername(e.target.value)}} type="text" className='form-control' placeholder='UserName'/>
                     <input  onChange={(e)=>{setInputPassword(e.target.value)}} type="password" className='form-control' placeholder='Password'/>
                     {<Link  id='navLink' to="/Home"><button onClick={() => {onClickHandle()}} className='btn btn-primary'>LOGIN IN</button></Link> }
               </div>
           </div>
        </div>
    )
}
