import React, {useState , useEffect} from 'react'
import axios from 'axios';
import { FaHandHoldingHeart  } from "react-icons/fa";
import {useParams} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "./Cars.css"

import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export default function Cars() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/prodects')
        .then(res =>{
          console.log("cars",res.data.cars)
          setCars(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    function carsDisplayOnPage(arr) {
        return <div className= "row" id='items_Cars'>
                    {arr && arr.map((elem , i) => {
                        
                        return <div key={i}  id='car_item'>
                            <Link  to={`/car/${elem.id}`}>
                                    <img id='img_id' src={elem.url} alt="" width={290} height={180}/>
                            </Link>  
                                <span>{elem.name}</span>
                                <div><img src="" alt="" /></div>  

                              </div>
                    })}
        </div>
    }


    return (
        <div>
            <div className="container">
                <div className="menu my-2" id='menu' >
                    <div className="btn">سيارات عائلية</div>
                    <div className="btn">سيارات متوسطه</div>
                    <div className="btn">سيارات اقتصادية</div>
                </div>  

                <div className="listcars">
                    {carsDisplayOnPage(cars.cars)}
                </div>  
                </div>

        </div>
    )
}

