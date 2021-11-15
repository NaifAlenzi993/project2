import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Select() {
    const [cars, setCars] = useState("")
    const { id }= useParams()
    
    useEffect(() => {
        axios.get('http://localhost:5000/car/' + id)
        .then(res =>{
          console.log("car-id",res.data)
          setCars(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    return (
        <div>
            <div className="container">
            

           


                <div id="info-car">
                <img src={cars.url} alt="" /> <br />
                <span>{cars.name}</span>
                <br />
                <span>{cars.price}</span>
                </div>

            </div>
        </div>
    )
}
