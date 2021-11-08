import React from 'react';
import Logo1 from '../../Pics/Logo1.webp';

function Header(): JSX.Element {
  return (
    <div className="bg-black">
      <div className="bg-home-header-bg bg-cover w-screen h-screen flex items-center justify-end">
        <img src={Logo1} alt="spaceX" className="w-6/12 h-52 mr-14" />
      </div>
      <div className="bg-launches1-bg bg-cover w-screen h-screen bg-opacity-0">
        <div className="flex-col items-start w-1/2 ml-40">
          <h1 className="font-bold text-xl pt-44 mb-14">Launches</h1>
          <p className="mb-7">
            SpaceX and NASA are targeting no earlier than Monday, November 8 at
            2:05 p.m. EST, 7:05 UTC, for Dragon to autonomously undock from the
            International Space Station and splash down approximately 8 hours
            later off the coast of Florida.
          </p>
          <p className="mb-7">
            Aboard the spacecraft will be Crew-2 astronauts Shane Kimbrough,
            Megan McArthur, Akihiko Hoshide, Thomas Pesquet, who were launched
            to the space station from historic Launch Complex 39A (LC-39A) at
            Kennedy Space Center in Florida on Saturday, April 23, 2021.
          </p>
          <button type="button" className="border-2 p-4">
            Check all launches
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
