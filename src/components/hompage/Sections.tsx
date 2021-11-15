import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

interface IProps {
  section: IHomeSection;
}

function Sections({ section }: IProps): JSX.Element {
  return (
    <div
      className={`w-screen h-screen flex flex-col ${
        section.title1 === 'Rockets' && 'items-end pr-40'
      } `}
      style={{
        backgroundImage: `url(${section.backgroundImage})`,
        backgroundPosition: `${
          section.title1 === 'Rockets' ? 'center' : 'bottom'
        }`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex-col items-start w-5/12 ml-40">
        <h1 className="font-bold text-xl pt-44 mb-14">{section.title1}</h1>
        <p className="mb-7 border-t pt-10 text-justify">{section.Text1}</p>
        <p className="mb-7 text-justify">{section.Text2}</p>
        <button type="button" className="border p-4">
          <Link to="/launches">{section.button}</Link>
        </button>
      </div>
      {section.title1 === 'LaunchPads' && (
        <div className="w-full flex justify-end p-10 pr-40 pt-96">
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Sections;
