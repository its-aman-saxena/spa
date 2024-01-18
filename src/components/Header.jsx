import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>

            <Navbar />

            <div className='name'>
                <h1>Hey, its me <span>Aman</span></h1>
                <p className='details'>I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code</p>
                <div className='header-btns'>
                    <a href='#' className='cv-btn'>Hire me</a>
                    <a href='#' className='cv-btn1'>Download cv</a>
                </div>
            </div>
            <div className='arrow'></div>
        </div>
    )
}

export default Header;
