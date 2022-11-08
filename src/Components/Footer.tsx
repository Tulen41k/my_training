import React from 'react';

function Footer () {
    return (
        <div className='footer-container'>
            <h4 className='footer-title'>Your best parther</h4>
            <div className='footer'>
                <div className='block one'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className='block two'>
                    <ul>
                        <li>Projects</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='block one'>
                </div>
                <div className='block two'>
                    <span>info@gmail.com</span>
                    <span>000 000 0000</span>
                    <span>Dubai, UAE</span>
                </div>
            </div>
            <div className='little-container'>
                <span className='little-text'>Terms and Policy</span>
                <span className='little-text'>All Copyright reserved</span>
            </div>
        </div>
    )

}

export default Footer;