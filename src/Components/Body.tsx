import React from 'react';

function Body () {
    return (
        <div className='body-container'>
            <span className='text'>Breif about the company</span>
            <h2 className='title-h2'>Our Clients</h2>
            <div className='clients'>
                <div className='card'>
                    <button className='btn'>More</button>
                </div>
                <div className='card'>
                    <button className='btn'>More</button>
                </div>
                <div className='card'>
                    <button className='btn'>More</button>
                </div>
            </div>
        </div>
    )

}

export default Body;