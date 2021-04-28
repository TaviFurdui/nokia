import React from 'react'
import './Header.styles.css'
import {IoPersonCircleOutline} from 'react-icons/io5'

export default class Header extends React.Component {

    render() {
        return (
            
            <div className = "header-container">

                <div className = "account-section">

                    <IoPersonCircleOutline className = "account-photo"></IoPersonCircleOutline>
                    <h1 className = "account-name">John Doe</h1>

                </div>
                
            </div>

        )
    }

}