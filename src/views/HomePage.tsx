import React from 'react';
import Sections from '../components/hompage/Sections';
import Header from './Home/Header';
import Homepagedata from '../data/Homepagedata';

function HomePage(): JSX.Element {
  return (
    <div className="bg-black w-screen text-white h-screen">
      <Header />
      {Homepagedata.map((section) => {
        return (
          <div key={section.backgroundImage}>
            <Sections section={section} />
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
