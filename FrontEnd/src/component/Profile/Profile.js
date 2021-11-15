import React, {useState , useEffect} from 'react'
import axios from 'axios';


export default function Profile() {
    const [profile, setprofile] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(res =>{
          console.log("users",res.data)
        setprofile(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])
     
        function profilePage(arr){
            return <div>
                {arr && arr.map((elem , i )=>{
                    return (
                        <div>
                        <span>{elem.id}</span>
                        <br />
                        <img src={elem.url} alt="" width={200} height={150} />
                        <br />
                        <span>{elem.name}</span>
                        <br />
                        <span>{elem.email}</span>
                        <br />
                        <span>{elem.type}</span>
                        <br />
                        </div>
                        
                    )
                
            })}
             
            </div>  
        }
        return (
        <div>
            {profilePage(profile)}
        </div>
    ) 
        } 

