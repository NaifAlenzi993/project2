
import React , {useEffect , useState}from 'react'
import axios from 'axios'
import "./msg.css"

export default function Maseege({user}) {
    
    const [msg, setMsg] = useState(user.message)

    // useEffect(()=>{
    //     console.log("from msg" , user.message);
    
    //     user.message && setMsg(user.message)

    //   } , [])


    return (
        <div>
            {msg && msg.map((elem , i) => {
                return  <div className="msg">
                            <h2> From: {elem.split("|")[0]} </h2> 
                            <div className="mass">
                            <h5> {elem.split("|")[1]} </h5> 
                            </div>
                    </div> 
            })}
            
        </div>
    )
}
