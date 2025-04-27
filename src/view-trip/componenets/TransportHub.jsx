import React from 'react';
import TransportHubCardItem from './TransportHubCardItem';

function TransportHub({ trip }) {
  if (
    !trip ||
    !trip.tripData ||
    !trip.tripData.travelPlan ||
    !trip.tripData.travelPlan.transportHubs ||
    trip.tripData.travelPlan.transportHubs.length === 0
  ) {
    return <div>No Transport Hubs Found</div>;
  }

  const transportHubs = trip.tripData.travelPlan.transportHubs;

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Transport Hubs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transportHubs.map((hub, index) => (
          <TransportHubCardItem key={index} hub={hub} />
        ))}
      </div>
    </div>
  );
}

export default TransportHub;
