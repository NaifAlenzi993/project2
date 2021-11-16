import React , {useState} from 'react'
import "./style.css"

export default function login() {
    // const [user, setuser] = useState({name:"" , email:""})



    // handleChange = (e) =>{
    //     const {name,value} = e.target
    //     setuser({[name]:value})
    // }

  
    return (
        <div>
           <div className="container">
               <div className="login-main">
                            <h3>LOGIN IN</h3>
                            <input type="text" className='form-control' placeholder='UserName'/>
                            <input type="text" className='form-control' placeholder='Password'/>
                            <button className='btn btn-primary'>LOGIN IN</button>
               </div>
           </div>
        </div>
    )
}
