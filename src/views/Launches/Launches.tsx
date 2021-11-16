import React from 'react';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import LaunchesData from '../../data/Launchesdata';
import Navbar from '../../components/hompage/Navbar';
import { launches } from '../../API/request';
import LaunchList from '../../components/launches/LaunchList';

function Launches(): JSX.Element {
  const { data, isLoading, error } = useQuery<any, AxiosError>(
    ['Launches'],
    () => launches.latest()
  );
  if (isLoading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>...error</p>;
  }
  return (
    <div className="bg-black w-screen text-white h-screen font-space">
      <div className="bg-launches1-bg bg-cover bg-bottom w-screen h-screen">
        <div className="p-10">
          <Navbar />
        </div>
        <div className="flex flex-col h-full w-1/2 text-justify justify-center px-12">
          <h2 className="text-6xl my-3 font-bold">{LaunchesData.title1}</h2>
          <p className="my-5">{LaunchesData.text1}</p>
          <p>{LaunchesData.text2}</p>
        </div>
      </div>
      <div className="h-screen w-screen flex flex-row bg-black p-10">
        <div className="flex flex-col w-1/2 h-full justify-center">
          <h2 className="text-2xl my-3 font-bold">{LaunchesData.title2}</h2>
          <div className="flex flex-row justify-between ">
            <h3 className="text-xl my-3 font-bold">{data.name}</h3>
            <p className="text-base my-3 font-bold">
              {new Date(data.date_local).toLocaleDateString()}
            </p>
          </div>
          <p className="text-justify">{data.details}</p>
          <h3 className="text-xl my-3 font-bold">
            {data.success ? 'Success launch' : 'Fail launch'}
          </h3>
        </div>
        <div className="flex flex-col justify-center mx-14">
          <h3 className="font-bold my-3">{LaunchesData.title3}</h3>

          <div className="border border-white">
            <iframe
              width="750"
              height="450"
              title="embed-youtube"
              src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
            />
          </div>

          <div className="my-14">
            <button type="button" className="border p-4">
              Check the rocket
            </button>
            <button type="button" className="border p-4 mx-14">
              Check the launchpad
            </button>
          </div>
        </div>
      </div>
      <div className="bg-launches2-bg bg-cover bg-bottom w-screen h-screen">
        <div>
          <LaunchList />
        </div>
      </div>
    </div>
  );
}

export default Launches;
