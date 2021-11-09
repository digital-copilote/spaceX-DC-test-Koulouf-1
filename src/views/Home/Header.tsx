import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../../Pics/Logo1.webp';
import Homepagedata from '../../fakedata/Homepagedata';
import Navbar from '../Navbar';

function Header(): JSX.Element {
  return (
    <div className="bg-black">
      <div className="w-full absolute flex flex-row justify-start p-10 pl-28 text-center">
        <Navbar />
      </div>
      <div className="bg-home-header-bg bg-cover w-screen h-screen flex items-center justify-end">
        <img src={Logo1} alt="spaceX" className="w-6/12 max-h-44 mr-14 mb-56" />
      </div>
      <div className="bg-launches1-bg bg-cover w-screen h-screen bg-opacity-0">
        <div className="flex-col items-start w-5/12 ml-40">
          <h1 className="font-bold text-xl pt-44 mb-14">
            {Homepagedata.titleLaunch}
          </h1>
          <p className="mb-7 border-t pt-10 text-justify">
            {Homepagedata.launchText1}
          </p>
          <p className="mb-7 text-justify">{Homepagedata.launchText2}</p>
          <button type="button" className="border p-4">
            <Link to="/Launches">{Homepagedata.buttonLaunch}</Link>
          </button>
        </div>
      </div>
      <div className="bg-rocket1-bg bg-cover w-screen h-screen bg-opacity-0 flex justify-end">
        <div className="flex-col items-end w-5/12 mr-40">
          <h1 className="font-bold text-xl pt-44 mb-14">
            {Homepagedata.titleRocket}
          </h1>
          <p className="mb-7 border-t pt-10 text-justify">
            {Homepagedata.rocketText1}
          </p>
          <p className="mb-7 text-justify">{Homepagedata.rocketText2}</p>
          <button type="button" className="border p-4">
            <Link to="/Rockets">{Homepagedata.buttonRocket}</Link>
          </button>
        </div>
      </div>
      <div className="bg-launchPad1-bg bg-cover w-screen h-screen bg-opacity-0 flex flex-col justify-between">
        <div className="flex-col items-start w-5/12 ml-40">
          <h1 className="font-bold text-xl pt-44 mb-14">
            {Homepagedata.titleLaunchPad}
          </h1>
          <p className="mb-7 border-t pt-10 text-justify">
            {Homepagedata.launchPadText}
          </p>
          <button type="button" className="border p-4">
            <Link to="/Lauchpad">{Homepagedata.buttonLaunchPad}</Link>
          </button>
        </div>
        <div className="w-full flex justify-end p-10 pr-40">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
