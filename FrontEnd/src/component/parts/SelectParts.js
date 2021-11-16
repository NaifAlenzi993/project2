import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./parts.css"

export default function SelectParts() {
    const [parts, setParts] = useState("")
    const { id }= useParams()
    
    useEffect(() => {
        axios.get('http://localhost:5000/part/' + id)
        .then(res =>{
          console.log("car-id",res.data)
          setParts(res.data)
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
                    <img className='img-info' src={parts.url} alt="" />
                    <span>HH</span> 
                    </div>
                        
                            <div className="into-car">
                                <span>{parts.name}</span>
                                <span>{parts.price}</span>
                            </div> 
                </div>


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
