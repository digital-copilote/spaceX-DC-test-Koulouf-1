import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo2.webp';

function Navbar(): JSX.Element {
  return (
    <div className="flex flex-row justify-between w-1/3">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/launches">Lauches</Link>
      <Link to="/rockets">Rockets</Link>
      <Link to="/lauchpad">Launchpad</Link>
    </div>
  );
}

export default Navbar;
