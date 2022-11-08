import React from 'react';

function Header() {
  return (
    <div className='header-container'>
      <div className='top-panel'></div>
      <div className='tabs'>
        <span className='tab'>Home</span>
        <span className='tab'>About</span>
        <span className='tab'>Services</span>
        <span className='tab'>Projects</span>
        <span className='tab'>Contact us</span>
      </div>
      <div className='title-photo'>
        <h1 className='title'>Your Title</h1>
        <h3 className='description'>Your Title</h3>
      </div>
    </div>
  );
}

export default Header;