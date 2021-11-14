import React, {useState , useEffect} from 'react'
import axios from 'axios';

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

    function carsDisplayOnPage(arr) {
        return <div className= "row" id='items_Cars'>
                    {arr && arr.map((elem , i) => {
                        
                        return <div key={i}  id='car_item'>
                                    <img id='img_id' src={elem.url} alt="" width={290} height={180}/>
                                <span>{elem.name}</span>
                                <div><img src="" alt="" /></div>  
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
