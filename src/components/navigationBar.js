import React from 'react';
import logo from '../Assets/Logo/ATDigital.png';
import '../css/navbar.css';

export default function NavigationBar() {
    return (
        <div className="home">
            <nav className="navbar">
                <div className="navdiv">
                    <div className="logo">
                        <a href="#"><img src={logo} alt='logo'></img></a>
                    </div>
                    <ul>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">CAREERS</a></li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}