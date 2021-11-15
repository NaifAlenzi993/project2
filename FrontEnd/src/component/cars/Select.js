import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./select.css"

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
                <div id="div-car">
                    <div className="imgContainer">
                    <img className='img-info' src={cars.url} alt="" />
                    <span>HH</span> 
                    </div>
                        
                            <div className="into-car">
                                <span>{cars.name}</span>
                                <span>{cars.price}</span>
                            </div> 
                </div>

                <iframe id="video-YT" width="560" height="315" src={cars.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className="replay">
                    <div className="comments">

                    </div>
                    <div className="input-btn">

                    <input type="text" className='form-control' placeholder='Write Comment Here'/>
                    <button className='btn btn-primary'>Add Comment</button>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
