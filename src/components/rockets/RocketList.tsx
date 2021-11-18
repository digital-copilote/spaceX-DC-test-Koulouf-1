import { AxiosError } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { rockets } from '../../API/request';
import RocketDetails from './RocketDetails';

function RocketList(): JSX.Element {
  const { data, isLoading, isError } = useQuery<any, AxiosError>(
    [rockets],
    () => rockets.list()
  );
  if (isLoading) {
    return <div>...loading</div>;
  }
  if (isError) {
    return <div>...error</div>;
  }
  return (
    <div className="h-full w-screen flex flex-col bg-black p-10">
      <h2 className="text-2xl mb-14 font-bold">Rockets</h2>
      <div className="w-full h-full overflow-y-scroll">
        {data?.map((rocket: any) => (
          <RocketDetails rocket={rocket} />
        ))}
      </div>
    </div>
  );
}
export default RocketList;
