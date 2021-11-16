import React, {useState , useEffect} from 'react'
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import {useParams , Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "../cars/Cars.css"




export default function Cars() {

    const [parts, setParts] = useState([])

    const [changeLikeColor, setChangeLikeColor] = useState(false)



    useEffect(() => {
       const get = async () => {
        await axios.get('http://localhost:5000/prodects')
        .then(res =>{
          console.log("parts",res.data.parts)
          setParts(res.data)
        })
        .catch(err => {
          console.log(err);
        })
        }

        get()
        
        }, [])

    const likedHandleClick = async (id) => {
        let response = await axios.post(`http://localhost:5000/like/${id}`, {
            id: id
        });
 
        if (response.data == "-1") {
            response = await axios.delete(`http://localhost:5000/like/${id}`)
            console.log('delete' , response.data);
        }else{
            setParts(response.data)
        }
    }


   


    function carsDisplayOnPage(arr) {
        return <div className= "row" id='items_Cars1'>
                    {arr && arr.map((elem , i) => {
                        return <div key={i}  id='car_item'>
                            <Link  to={`/part/${elem.id}`}>
                                <img id='img_id' src={elem.url} alt="" width={290} height={180}/>
                            </Link>  
                                <span>{elem.name}</span>
                                <div id='handle'  onClick={()=>{likedHandleClick(elem.id);}}><span>{elem.price + " $"} </span><FaHeart id='icon'  /> </div>
                            </div>
                    })}
        </div>
    }


    return (
        <div>
            <div className="container">
                

                <div className="listcars">
                    {carsDisplayOnPage(parts.parts)}
                </div>  
                </div>

        </div>
    )
}

