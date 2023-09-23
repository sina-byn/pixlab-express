import React from 'react';

const Header = () => {
  return (
    <header className='app-header flex items-center justify-between bg-primary text-gray-200 py-3 px-4'>
      <h1 className='app-title text-base font-semibold m-0'>PixLab Express</h1>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://portfolio-sina-byn.vercel.app/'
        className='portfolio-link text-inherit text-xs underline'
      >
        Developed by Sina Bayandorian with &#10084;
      </a>
    </header>
  );
};

export default Header;
