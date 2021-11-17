import React , {useState , useEffect} from 'react'
import axios from 'axios'

export default function Members() {
    const [members, setMembers] = useState([])
    
   

    
    useEffect(() => {
        const get = async () => {
         await axios.get('http://localhost:5000/users')
         .then(res =>{
           console.log("users",res.data.users)
           setMembers(res.data)
         })
         .catch(err => {
           console.log(err);
         })
         }
 
         get()
         
         }, [])
    return (
        
        <div>
         {members && members.map((elem , i )=>{
                    return (
                        
                    <div >
                        
                        <div  className="member">
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
                    </div>
                        
                    )
                
            })}
        </div>
    )
}
