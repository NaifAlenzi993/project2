import React, {useState , useEffect} from 'react'
import "./style.css"

export default function Login() {

  
    const [userName, setuserName] = useState("")

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
                            <button onClick={() => {}} className='btn btn-primary'>LOGIN IN</button>
               </div>
           </div>
        </div>
    )
}
