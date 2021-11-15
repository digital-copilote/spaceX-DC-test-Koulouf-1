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
    <div className="bg-black w-screen text-white h-screen">
      {data?.map((launch: any) => (
        <LaunchDetails launch={launch} />
      ))}
    </div>
  );
}

export default LaunchList;
