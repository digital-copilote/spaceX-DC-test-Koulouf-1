import React from 'react';
import Logo1 from '../../assets/Logo1.webp';
import Navbar from '../../components/hompage/Navbar';
import background1 from '../../assets/HomeBg2.webp';

function Header(): JSX.Element {
  return (
    <div
      className="w-screen h-screen flex flex-col p-10"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <div className="w-full flex justify-end h-full items-center">
        <img src={Logo1} alt="spaceX" className="w-6/12 max-h-44 mr-14 mb-56" />
      </div>
    </div>
  );
}

export default Header;
