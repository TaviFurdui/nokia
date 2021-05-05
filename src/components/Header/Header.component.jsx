import React from 'react'
import './Header.styles.css'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillUnlock } from 'react-icons/ai';
import {IoAnalyticsSharp} from 'react-icons/io5'
import {MdNotifications} from 'react-icons/md'
import {IoPersonCircleOutline} from 'react-icons/io5'
import axios from 'axios';

export default class Header extends React.Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        }
        
        this.showMenu = this.showMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        if (this.state.showMenu == true)
        {
            this.setState({
                showMenu: false,
            });
        }   
        else{
            this.setState({
                showMenu: true,
            });
        }
    }
    componentDidMount()
    {

        axios.get('http://localhost:81/Nokia/afiseaza_notificare.php')
          .then( response =>{
            console.log(response);
            this.setState({row:response.data});
          })
          .catch(function (error) {
          console.log(error);
          })
          .then(function () {

          });
        
    }
    render() {
        return (
            
            <div className = "header-container">

                <div className = "account-section">
                    
                    <button onClick={this.showMenu}><MdNotifications className = "notifications-icon"></MdNotifications></button>
                    {
                        this.state.showMenu
                            ? (
                            <div className="menu">
                                {this.state.row.map(datum=>  
                                    <div className="notification-box">
                                        {datum.MESAJ}
                                    </div>
                                )}
                            </div>
                            )
                            : (
                            null
                            )
                    }
                    <IoPersonCircleOutline className = "account-photo"></IoPersonCircleOutline>
                    <h1 className = "account-name">John Doe</h1>

                </div>
                
            </div>

        )
    }

}
