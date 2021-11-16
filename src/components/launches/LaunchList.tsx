import React from 'react';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import LaunchDetails from './LaunchDetails';
import { launches } from '../../API/request';

function LaunchList(): JSX.Element {
  const { data, isError, isLoading } = useQuery<any[], AxiosError>(
    [launches],
    () => launches.list()
  );
  if (isLoading) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>...error</div>;
  }
  return (
    <div className="h-screen w-screen flex flex-col bg-black p-10">
      <h2 className="text-2xl mb-14 font-bold">All launches</h2>
      <div className="w-full h-full overflow-y-scroll">
        {data?.map((launch: any) => (
          <LaunchDetails launch={launch} />
        ))}
      </div>
    </div>
  );
}

export default LaunchList;
