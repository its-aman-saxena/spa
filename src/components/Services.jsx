import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png';


const Services = () => {
    return (
        <div id='services'>
            <div className='s-heading'>
                <h1>Services</h1>
                <p>I am passionate about programming and wanna explore more fields in these domains.</p>
            </div>
            <div className="b-container">
                <Box image={image1} alte='image1' button='Know More' />
                <Box image={image1} alte='image1' button='Know More' />
            </div>
        </div>
    )
}

export default Services
