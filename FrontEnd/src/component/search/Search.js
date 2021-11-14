import React , {useEffect , useState}from 'react'
import axios from 'axios'
import './search.css'

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

    function findElement(arr) {
       let arrafilter =  arr.filter((element) => {
            if (element.name.toLowerCase().includes(findsearch.toLocaleLowerCase()) ) {
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
            <input id='inputSearch' type="text" placeholder="search" onChange={(e)=>{searchFun(e)}}/>
            
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