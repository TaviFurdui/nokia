import React from 'react'
import './Menu.styles.css'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillUnlock } from 'react-icons/ai';
import {IoAnalyticsSharp} from 'react-icons/io5'
import {MdNotifications} from 'react-icons/md'
import {Link} from 'react-router-dom'

export default class Menu extends React.Component {

    render() {
        
        return (
            
            <div className="menu-container">
                
                <div className="menu-title">
                     <BsFillPersonLinesFill className = "admin-panel-icon"></BsFillPersonLinesFill>
                    <h1 className = "menu-text">Admin Panel</h1>
                </div>

                <div className="sections">
                    
                     <div className = "security-section option">
                        <AiFillUnlock className = "security-icon"></AiFillUnlock>
                        <h1 className = "security-text">Securitate</h1>
                    </div>

                    <div className = "analytics-section option">
                        <IoAnalyticsSharp className = "analytics-icon"></IoAnalyticsSharp>
                        <h1 className = "analytics-text">Analytics</h1>
                    </div>

                    <div className = "notifications-section option">
                        <MdNotifications className = "notifications-icon"></MdNotifications>
                        <Link to = "/notifications" className = "notifications-text">Notificari</Link>
                    </div>

                    

               </div>

            </div>

        )
    }

}