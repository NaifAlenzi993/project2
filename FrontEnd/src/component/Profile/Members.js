import React , {useState , useEffect} from 'react'
import axios from 'axios'

export default function Members({user}) {
    const [members, setMembers] = useState([])

    const [toggle, setToggle] = useState([false,false])

    const [done, setDone] = useState([null , null])
    
    const [inputMsg, setInputMsg] = useState("")
    
   

    
    useEffect(() => {
        const get = async () => {
         await axios.get('http://localhost:5000/users')
         .then(res =>{
           console.log("users",res.data.users)
           setMembers(res.data)
           console.log(res.data);
         })
         .catch(err => {
           console.log(err);
         })
         }
 
         get()
         
         }, [])

         function onClickToggle(i) {
           const copyArr = [...toggle]
           if (toggle[i] == false){
            copyArr[i] = !copyArr[i]
            setToggle(copyArr)

            

           }else {

            // setDone("Done Send Massege !")
            // setTimeout(()=>{
            //   setDone(null)
            //  } , 1000)
            const sendMaseege = async() => {
              let response = await axios.post(`http://localhost:5000/message/`, {
                id : members[i].id,
                from: user.name,
                mag: inputMsg
            });
            }
            sendMaseege()
          
            copyArr[i] = !copyArr[i]
            setToggle(copyArr)
            
           }
           
         }

         function updateInput(e){
          setInputMsg(e.target.value)
         }

         const DivProfile = (elem , i) => {
           if (toggle[i] == true) {

           return <>
         
            <div className="profile-main">
                    <img src={elem.url} alt="" width={60} height={60} />
                    <br />
                    <div className="profile-info">
                        <span>ID : {elem.id}</span>
                        <span>Name : {elem.name}</span>
                        <span>E-Mail : {elem.email}</span>
                        <span>Type : {elem.type}</span>
                    </div>
            </div> 
            <input onChange={(e)=>{updateInput(e)}} type="text" />
            
      </>

           }else {
             return <div className="profile-main">
             <img src={elem.url} alt="" width={60} height={60} />
             <br />
             <div className="profile-info">
                 <span>ID : {elem.id}</span>
                 <span>Name : {elem.name}</span>
                 <span>E-Mail : {elem.email}</span>
                 <span>Type : {elem.type}</span>
             </div>
     </div> 
           }
           
         }

      

      
    return (
        
        <div>
          <h4 style={{color : "green" , textAlign: "center"}}>{done}</h4>
         {members && members.map((elem , i )=>{
                    return (   
                    <div >
                        <div  className="member">
                          {DivProfile(elem , i)} 
                          
                         
                        <button id='btn-send'  onClick={()=>{onClickToggle(i)}}>SEND</button>

                       
                        
                        <br />
                  
                        
                        </div>
                    </div>
                        
                    )
                
            })}
        </div>
    )
}
