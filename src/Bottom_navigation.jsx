import React from 'react';
import "./Bottom_navigation.css"
import { Link } from 'react-router-dom';
export default function Bottomnavfunction() {
    return (
        <div className="footerClass">
            <Link to="/error" className='Icons'><i className="fas fa-vr-cardboard fa-lg"></i>
            <p>AR</p>
            </Link>
            <div className='Icons'><i className="fas fa-clipboard-list fa-lg"></i>
            <p>Booking</p></div>
            <div className='Icons'>
                <i className="fas fa-house-user fa-lg"></i>
            <p>Home</p></div>
            <div className='Icons'><i className="fas fa-comment-dots fa-lg"></i>
            <p>Assistant</p></div>
            <div className='Icons'><i className="fas fa-user-tie fa-lg"></i>
            <p>Account</p></div>
            </div>
            )
}