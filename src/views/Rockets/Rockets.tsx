import React from 'react';
import Navbar from '../../components/hompage/Navbar';
import RocketList from '../../components/rockets/RocketList';
import RocketTop from '../../components/rockets/RocketTop';

function Rockets(): JSX.Element {
  return (
    <div className="bg-black w-screen text-white h-screen font-space">
      <div className="bg-rocket2-bg bg-cover bg-bottom w-screen h-screen">
        <div className="p-10">
          <Navbar />
        </div>
        <RocketTop />
      </div>
      <div className="h-screen w-screen">
        <RocketList />
        <Navbar />
      </div>
    </div>
  );
}

export default Rockets;
