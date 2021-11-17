
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
import SelectParts from './component/parts/SelectParts'
import Search from './component/search/Search';
import Bookmark from './component/bookmark/Bookmark';
import Login from './component/registry/Login';
import Profile from './component/Profile/Profile';
import Members from './component/Profile/Members';





function App() {
    const [prodects, setProdects] = useState("")
    const [userOnline, setUserOnline] = useState({type: "guest"})
   
    useEffect(()=>{
      const getStateUser = async ()=> {
        let response = await axios.get(`http://localhost:5000/login/`);

    

        if (response.data !== "-1"){
          // setUserOnline()
          setUserOnline(response.data)
          // console.log("app get state",response.data);
        }
      }
      
      getStateUser()

    } , [])

    // const ChangeUserOnline = (user) => {
    //   setUserOnline(user)
    // }


  return (
    <>
      <BrowserRouter>
               <div>
                  <Header user = {userOnline} changeUser = {x =>setUserOnline(x)} />
                  <Route exact={true} path="/" component={Home} />
                  <Route path="/Home" render = {() => (
                    <Home changeUser = {x =>setUserOnline(x)}></Home>
                  )}/>
                  <Route path="/Cars" render = {() => (
                    <Cars prodectsTr = {prodects}></Cars>
                  )}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/Parts" component={Parts} />
                  <Route path="/mainten" component={mainten} />
                  <Route path="/car/:id" exact component={Select} />
                  <Route path="/part/:id" exact component={SelectParts} />
                  <Route path="/bookmark" exact component={Bookmark} />
                  {/* <Route path="/login" exact component={Login} /> */}
                  <Route path="/profile" exact component={Profile} />
                  <Route path="/members" exact component={Members} />
                
                  <Route path="/login" render = {() => (
                    <Login changeUser = {x =>setUserOnline(x)}></Login>
                  )}/>
                  



                  
               </div>
       </BrowserRouter>
    </>
  );
}

export default App;