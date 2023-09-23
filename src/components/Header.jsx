const Header = ({ children }) => {
  return (
    <header className='app-header flex items-center justify-between bg-primary text-gray-200 py-3 px-2 md:px-4'>
      <div className='header-main flex flex-col md:flex-row justify-between'>
        <h1 className='app-title text-base font-semibold m-0'>PixLab Express</h1>
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='https://portfolio-sina-byn.vercel.app/'
          className='portfolio-link text-inherit text-xs underline'
        >
          Developed by Sina Bayandorian with &#10084;
        </a>
      </div>
      {children}
    </header>
  );
};

export default Header;
