import React from 'react';
import "../Stylesheets/MainNavbar.css";
import document from "../assets/document.svg";
import questionmark from "../assets/questionmark.svg";
import Magnifier from "../assets/Magnifier.svg";
import notification from "../assets/notification.svg";
import settings from "../assets/settings.svg";
const MainNavbar = () => {
    return ( 
    <div className='MainNavbar'>
        <div className='MNLogoDiv'>
            <img src={document} />
            <span><b>Ticket Flow</b></span>
        </div>
        <div className='MNSearchContainer'>
            <img src={Magnifier}/>
            <input type='text' placeholder='Search Tickets'/>
        </div>
        <div className='MNSettingspane'>
            <img src={questionmark}/>
            <img src={notification}/>
            <img src={settings}/>
            <img className='MNProfilePic' src='https://images.unsplash.com/photo-1528892952291-009c663ce843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzMHx8cG9ydHJhaXR8ZW58MXx8fHwxNjg3NDM5MjI1fDA&ixlib=rb-4.0.3&q=80&w=1080'/>
        </div>
    </div> );
}
 
export default MainNavbar;