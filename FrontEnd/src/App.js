
import { BrowserRouter, Route} from 'react-router-dom';
import React, {useState , useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios';

import Header from "./component/navbar/Header";
import Home from "./component/home/Home"

//الاقسام الاساسية
import Cars from "./component/cars/Cars"
import Parts from "./component/parts/parts"
import mainten from "./component/maintenance/maintenance"

//اقسام فرعية
import Select from './component/cars/Select';
import Search from './component/search/Search';
import Bookmark from './component/bookmark/Bookmark';
import Login from './component/registry/Login';
import Profile from './component/Profile/Profile';





function App() {
    const [prodects, setProdects] = useState({})

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


  return (
    <>
      <BrowserRouter>
               <div>
                  <Header />
                  <Route exact={true} path="/" component={Home} />
                  <Route path="/Home" component={Home} />
                  <Route path="/Cars" render = {() => (
                    <Cars prodectsTr = {prodects}></Cars>
                  )}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/Parts" component={Parts} />
                  <Route path="/mainten" component={mainten} />
                  <Route path="/car/:id" exact component={Select} />
                  <Route path="/bookmark" exact component={Bookmark} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/profile" exact component={Profile} />
                  



                  
               </div>
       </BrowserRouter>
    </>
  );
}

export default App;