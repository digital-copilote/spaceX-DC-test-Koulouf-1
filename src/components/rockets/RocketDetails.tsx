import React from 'react';

function RocketDetails({ rocket }: { rocket: any }): JSX.Element {
  return (
    <div className="flex flex-row justify-between border-b">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold my-3">{rocket.name}</h3>
        <p className="my-1">Type : {rocket.type}</p>
        <p className="my-3">
          First flight : {new Date(rocket.first_flight).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-16">
        <button type="button" className="border p-4 mx-14">
          Rockets details
        </button>
      </div>
    </div>
  );
}

export default RocketDetails;
