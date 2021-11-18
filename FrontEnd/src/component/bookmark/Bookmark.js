import React, {useState , useEffect} from 'react'
import axios from 'axios';
import {useParams , Link} from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import "./bookmark.css"

export default function Bookmark() {
    const [Likes, setLikes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/like')
        .then(res =>{
        //   console.log("likes",res.data)
          setLikes(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    
    const likedHandleClick = async (id)=> {

        const response = await axios.post(`http://localhost:5000/like/${id}`, {
            id: id
        });

        

        if (response.data == "-1") {
            const response = await axios.delete(`http://localhost:5000/like/${id}`)
            setLikes(response.data)
        }
      
    }

   

    function carsDisplayOnPage(arr) {
        return <div className= "row" id='items_Cars'>
                    {arr && arr.map((elem , i) => {
                        
                        return <div key={i}  id='car_item'>
                        <Link  to={`/car/${elem.id}`}>
                            <img id='img_id' src={elem.url} alt="" width={290} height={180}/>
                        </Link>  
                            
                            <span>{elem.name}</span>
                            <div id = "handle" onClick={()=>{likedHandleClick(elem.id)}}><FaHeart id='icon' style={{color:elem.like}} /> <span>{elem.price + " $"} </span> </div>
                        </div>
                })}
    </div>
    }

    return (
        <div>
            {carsDisplayOnPage(Likes)}
        </div>
    )
}
