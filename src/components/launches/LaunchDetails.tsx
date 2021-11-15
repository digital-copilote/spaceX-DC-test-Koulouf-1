import React from 'react';

function LaunchDetails({ launch }: { launch: any }): JSX.Element {
  return <div>{launch.name}</div>;
}

export default LaunchDetails;
