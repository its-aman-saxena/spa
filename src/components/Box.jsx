import React from 'react'

const Box = (props) => {
    return (
        <div className='s-box'>
            <div className='s-b-img'>
                <img src={props.image} alt={props.alte} />
            </div>
            <div className='s-b-text'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unkn</p>
                <a href='#' className='cv-btn'>{props.button}</a>
            </div>
        </div>
    )
}

export default Box
