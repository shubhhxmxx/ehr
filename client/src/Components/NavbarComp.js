import React, { Component } from "react";
import { Form,Button,Navbar, Nav} from 'react-bootstrap';
import plusSign from "./Images/plus_sign.png"

class NavbarComp extends Component{
    
    render()
    {
      let isLogged = this.props.isLogged?true:false;
    
        return(
          
            <div bg="dark">
                
              <Navbar bg="dark" variant="dark">
              <a className='navbar-brand col-sm-3 col-md-2 mr-0' style={{color:'white'}}>
            
                  <img alt='bank img' src={plusSign} width='40' height='30' className='d-inline-block align-top'></img>
                   &nbsp;
                   Electronic Health Report Manager
                  </a>
                <Nav className="mr-auto">
                  {}
                </Nav>
                <Form inline>
                  {}
                  {isLogged?
                  <Button variant="outline-light" onClick={()=>this.props.onlogout()}>Logout</Button>:<div></div>}
                </Form>
                <ul className='navbar-nav px-3'>
            <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
              <small style={{color:'white'}}>Account Number: {this.props.account}</small>
            </li>
          </ul>
              </Navbar>
            </div>
            );
    }
}


export default NavbarComp;