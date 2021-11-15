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
      <div className="bg-launches1-bg bg-cover p-10 bg-bottom w-screen h-screen">
        <Navbar />
        <div className="flex flex-col h-full w-1/2 text-justify justify-center px-12">
          <h2 className="text-6xl my-3 font-bold">{LaunchesData.title1}</h2>
          <p className="my-5">{LaunchesData.text1}</p>
          <p>{LaunchesData.text2}</p>
        </div>
        <div className="h-screen w-screen flex flex-row bg-black p-10">
          <div className="flex flex-col w-1/2">
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
          <div className="flex flex-col">
            <h3 className="font-bold">{LaunchesData.title3}</h3>

            <iframe
              width="420"
              height="315"
              title="embed-youtube"
              src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
            />
          </div>
          <div>
            <LaunchList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launches;
