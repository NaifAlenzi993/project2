import React, {useState , useEffect} from 'react'
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import {useParams , Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "./Cars.css"




export default function Cars() {

    const [cars, setCars] = useState([])

    const [changeLikeColor, setChangeLikeColor] = useState(false)



    useEffect(() => {
       const get = async () => {
        await axios.get('http://localhost:5000/prodects')
        .then(res =>{
          console.log("cars",res.data.cars)
          setCars(res.data)
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
            setCars(response.data)
        }
    }


    function toggleColor(id){
        const arrCopy = {...cars}
        if (arrCopy.cars[id-1].like == "black"){
            arrCopy.cars[id-1].like = "red"
        }else{
            arrCopy.cars[id-1].like = "black"
        }
        setCars(arrCopy)
    }


    function carsDisplayOnPage(arr) {
        return <div className= "row" id='items_Cars1'>
                    {arr && arr.map((elem , i) => {
                        return <div key={i}  id='car_item'>
                            <Link  to={`/car/${elem.id}`}>
                                <img id='img_id' src={elem.url} alt="" width={290} height={180}/>
                            </Link>  
                                <span>{elem.name}</span>
                                <div id='handle'  onClick={()=>{likedHandleClick(elem.id);toggleColor(elem.id)}}><span>{elem.price + " $"} </span><FaHeart id='icon' style={{color:elem.like}} /> </div>
                            </div>
                    })}
        </div>
    }


    return (
        <div>
            <div className="container">
                

                <div className="listcars">
                    {carsDisplayOnPage(cars.cars)}
                </div>  
                </div>

        </div>
    )
}

