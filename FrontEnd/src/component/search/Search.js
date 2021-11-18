import React , {useEffect , useState}from 'react'
import axios from 'axios'
import { FaHeart } from 'react-icons/fa';
import './search.css'
import {Link} from 'react-router-dom';

export default function Search() {

    const [prodects, setProdects] = useState({})

    const [findsearch , setFindsearch] = useState("")

    useEffect(() => {
        axios.get('http://localhost:5000/prodects')
        .then(res =>{
          console.log(res.data)
          setProdects(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    const likedHandleClick = async (id)=> {

        let response = await axios.post(`http://localhost:5000/like/${id}`, {
            id: id
        });
 
        if (response.data == "-1") {
            response = await axios.delete(`http://localhost:5000/like/${id}`)
            // console.log('delete' , response.data);
        // }else{
        //     setProdects(response.data)
        }
    }

    function toggleColor(id){
        const arrCopy = {...prodects}
        if (arrCopy.cars[id-1].like == "black"){
            arrCopy.cars[id-1].like = "red"
        }else{
            arrCopy.cars[id-1].like = "black"
        }
        setProdects(arrCopy)
    }

    function carsDisplayOnPage(arr) {
        return <div className= "row" id='items_Cars'>
                    {arr && arr.map((elem , i) => {
                        
                        return <div key={i}  id='car_item'>
                            <Link  to={`/car/${elem.id}`}>
                                <img id='img_id' src={elem.url} alt="" width={290} height={180}/>
                            </Link>  
                                
                                <span>{elem.name}</span>
                                <div  onClick={()=>{likedHandleClick(elem.id);toggleColor(elem.id)}}><FaHeart id='icon' style={{color:elem.like}} /> <span>{elem.price + " $"} </span> </div>
                            </div>
                    })}
        </div>
    }

    function findElement(arr) {
       let arrafilter =  arr.filter((element) => {
            if (element.name.toLowerCase().includes(findsearch.toLocaleLowerCase()) && findsearch.toLocaleLowerCase().length > 1 ) {
                return element
            }
        })

        return arrafilter
    }
    
    const searchFun = (e)=>{
    
            setFindsearch(e.target.value)
            console.log(findElement(prodects.cars));
        
    }

    return (
        <div id='searchDiv'>
            
            <input id='inputSearch' className='form-control' type="text" placeholder="  search" onChange={(e)=>{searchFun(e)}}/>
            
            {carsDisplayOnPage(prodects.cars && findElement(prodects.cars))}
            
        </div>
    )
}
// {cars.filter((element )=>{
//     if(this.state.search == ""){
//         return element
//     }
//     else if (element.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())){
//         return element
//     }
//   })