import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./Header.css"
import {Navbar , Nav , NavDropdown } from 'react-bootstrap'
import logo from './logo.png'

export class Header extends Component {
    render() {
    
//Bootstrap Color : .text-primary  , .text-secondary , .text-success , .text-danger
// .text-warning , .text-info , .text-light , .text-dark , .text-muted , .text-white


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
                        <NavDropdown.Item> <Link id="item" to="/mainten">SERVICE</Link></NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link> <Link id='navLink' to="/Home">HOME</Link> </Nav.Link>
                    <Nav.Link> <Link id='navLink' to="/search">SEARCH</Link> </Nav.Link>
                    <Nav.Link> <Link id='navLink' to="/Bookmark">BOOKMARK</Link> </Nav.Link>
                    <Nav.Link> <Link id='navLink' to="/login">LOGIN</Link> </Nav.Link>
                    {/* <Nav.Link> <Link id='navLink' to="/registry">REGISTRY</Link> </Nav.Link> */}
                    <Nav.Link> <Link id='navLink' to="/profile">PROFILE</Link> </Nav.Link>
                    </Nav>

              

                    </Navbar.Collapse>

                </Navbar>
                   

            </div>
        )
    }
}

export default Header



             
                //     <NavDropdown title = "حسابي">
                //         <NavDropdown.Item to = "">تسجيل</NavDropdown.Item>
                //         <NavDropdown.Item>تسجيل دخول</NavDropdown.Item>
                //         <NavDropdown.Item>حسابي</NavDropdown.Item>
                //     </NavDropdown>