import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./select.css";
import { FaStar } from 'react-icons/fa';


export default function Select({user}) {
    const [cars, setCars] = useState("")
    const { id }= useParams()
    const [inputComment, setInputComment] = useState([])
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5000/car/' + id)
        .then(res =>{
          console.log("comments",res.data)
          setCars(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }, [cars])

    const AddComent = async (comment , id) => {
        
        let response = await axios.post(`http://localhost:5000/comment/`, {
            id: id , 
            name: user.name,
            comment: comment
        });
        // console.log();

        const copyObj = {...cars}
        
        copyObj.comments.push(response.data)
        setComments(copyObj)

        // setCars(copyObj)

        console.log("comWithName" , cars);
        
    }


    function inputOnChange(e) {
      setInputComment(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div id="div-car">
                    <div className="imgContainer">
                    <img className='img-info' src={cars.url} alt="" />
                    </div>
                        
                            <div className="into-car">
                                <span><b>Name&Model :  </b> {cars.name}</span>
                                <span><b>Price :  </b>{cars.price} $</span>
                                <span><b>Rate :  </b><FaStar style={{color:"gold"}}/>
                                <FaStar style={{color:"gold"}}/>
                                <FaStar style={{color:"gold"}}/>
                                <FaStar style={{color:"gold"}}/>
                                <FaStar style={{color:"gold"}}/></span>

                            </div> 
                </div>

                <iframe id="video-YT" width="560" height="315" src={cars.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className="replay">

                <div className="comments">
                     
                     {cars.comments && cars.comments.map((elem) => {
                        return <div id='coment-show'>
                            <div className='img-comment'>

                            </div>
                            <div id='comment-span'>
                            
                                <h4>{elem.name}</h4>
                                <span>{elem.comment}</span>
                             </div>
                        </div>
                     })}
                 
             </div>

                    <div className="input-btn">

                    <input onChange={(e)=>{inputOnChange(e)}} type="text" className='form-control' placeholder='Write Comment Here'/>
                    <button onClick={()=>{AddComent(inputComment , cars.id)}} className='btn btn-primary'>Add Comment</button>
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
}
