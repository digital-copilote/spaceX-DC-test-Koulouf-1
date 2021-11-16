import React from 'react';

function LaunchDetails({ launch }: { launch: any }): JSX.Element {
  return (
    <div className="flex flex-row justify-between border-b">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold my-3">{launch.name}</h3>
        <p className="my-1">Flight number : {launch.flight_number}</p>
        <p className="my-3">
          Date : {new Date(launch.date_local).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-16">
        <button type="button" className="border p-4 mx-14">
          Launch details
        </button>
      </div>
    </div>
  );
}

export default LaunchDetails;
