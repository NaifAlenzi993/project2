import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./Header.css"
import {Navbar , Nav , NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import axios from 'axios';

export default function Header({user , changeUser}) {

   

console.log("user",user );    

    const onClickLogOut = async () => {

        console.log("from onClick logout",user.id , user.name);
        changeUser({type: "guest" , name: "guest420"});
        console.log("logout");
   
       
        const response = await axios.delete(`http://localhost:5000/logout/${user.id}`);
        
        
    }
  

    const guestNav = ()=> {
        return <>
        <Nav.Link> <Link id='navLink' to="/Home">HOME</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/search">SEARCH</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/Bookmark">BOOKMARK</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/login">LOGIN</Link> </Nav.Link>
        {/* <Nav.Link> <Link id='navLink' to="/registry">REGISTRY</Link> </Nav.Link> <br></br> */}
    </>
    }

    const userNav = ()=> {
        return <>
        <Nav.Link> <Link id='navLink' to="/Home">HOME</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/search">SEARCH</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/Bookmark">BOOKMARK</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/profile">PROFILE</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/members">MEMBERS</Link> </Nav.Link>
        <br></br>
        <NavDropdown id='NavDropown' title = "ACCOUNT">
                        <NavDropdown.Item > <Link id='navLink' to="/profile">PROFILE</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link onClick={() => {onClickLogOut()}} id='navLink' to="/Home">LOGOUT</Link></NavDropdown.Item>
                       
                    </NavDropdown>
        <h4 style={{color:"white" , padding: "5px"}}>{"Welcome " + user.name}</h4>
    </>
    }

    const adminNav = ()=> {
        return <>
        <Nav.Link> <Link id='navLink' to="/Home">HOME</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/search">SEARCH</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/Bookmark">BOOKMARK</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/profile">PROFILE</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/admin">Admin</Link> </Nav.Link>
        <Nav.Link> <Link id='navLink' to="/members">MEMBERS</Link> </Nav.Link>
        <Nav.Link onClick={() => {onClickLogOut()}}><Link id='navLink' to="/Home">LOGOUT</Link></Nav.Link> <br></br>
        <NavDropdown id='NavDropown' title = "ACCOUNT">
                        <NavDropdown.Item > <Link id='navLink' to="/profile">PROFILE</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link id='navLink' to="/admin">Admin</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link onClick={() => {onClickLogOut()}} id='navLink' to="/Home">LOGOUT</Link></NavDropdown.Item>
                       
                    </NavDropdown>
        <h4 style={{color:"white"}}>{"Welcome " + user.name}</h4>

    </>
    }

    function checkNavAccount(){
        if (user.type == "guest"){
            return guestNav()
        }else if (user.type == "User"){
            return userNav()
        }else if(user.type == "Admin"){
            return adminNav()
        }
    }
    

    return (
        <div>
            
                <Navbar collapseOnSelect bg ="dark" variant = "dark"
                   sticky="top" expand = "lg">
                    
                    <Navbar.Brand > 
                        <img src={logo} width="40" height={"40"}/>
                        <span className='ml-2'>World Of Cars</span> 
                    </Navbar.Brand>
                     
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">

                    <Nav> 
                    <NavDropdown id='NavDropown' title = "CATEGORIES">
                        <NavDropdown.Item > <Link id="item" to="/Cars">CARS</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link id="item" to="/Parts">ACCESSORY</Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link id="item" to="/mainten">ABOUT</Link></NavDropdown.Item>
                    </NavDropdown>

                    {
                        
                        checkNavAccount()
                    
                    }
                    
                   
                    
                    {/* <Nav.Link> <Link id='navLink' to="/registry">REGISTRY</Link> </Nav.Link> */}
                    
                    
                    </Nav>

              

                    </Navbar.Collapse>

                </Navbar>
                   

            </div>
    )


}



    
//Bootstrap Color : .text-primary  , .text-secondary , .text-success , .text-danger
// .text-warning , .text-info , .text-light , .text-dark , .text-muted , .text-white


 

             
                //     <NavDropdown title = "حسابي">
                //         <NavDropdown.Item to = "">تسجيل</NavDropdown.Item>
                //         <NavDropdown.Item>تسجيل دخول</NavDropdown.Item>
                //         <NavDropdown.Item>حسابي</NavDropdown.Item>
                //     </NavDropdown>
