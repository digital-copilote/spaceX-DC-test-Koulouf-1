import React from 'react';

function RocketTop(): JSX.Element {
  return (
    <div className="flex flex-col w-1/2 h-1/2 text-justify justify-center px-12">
      <h2 className="text-6xl my-3 font-bold">Rockets</h2>
      <p className="my-5">
        With more than 5 million pounds of thrust at liftoff, Falcon Heavy is
        the most capable rocket flying. By comparison, the liftoff thrust of the
        Falcon Heavy equals approximately eighteen 747 aircraft at full power.
        Falcon Heavy can lift the equivalent of a fully loaded 737
        jetliner—complete with passengers, luggage and fuel—to orbit.
      </p>
      <p>
        Merlin is a family of rocket engines developed by SpaceX for use on its
        Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use
        RP-1 and liquid oxygen as rocket propellants in a gas-generator power
        cycle. The Merlin engine was originally designed for recovery and reuse.
      </p>
    </div>
  );
}

export default RocketTop;
