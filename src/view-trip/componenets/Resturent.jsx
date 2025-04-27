import React from 'react';
import RestaurantCardItem from './RestaurantCardItem'; // You will need to create this similar to PlacecardItem

function RestaurantsToVisit({ trip }) {
  if (
    !trip ||
    !trip.tripData ||
    !trip.tripData.travelPlan || // Checking travelPlan
    !trip.tripData.travelPlan.restaurants || // Checking restaurants array
    !Array.isArray(trip.tripData.travelPlan.restaurants)
  ) {
    return <div>No Restaurants Found</div>;
  }

  const restaurants = trip.tripData.travelPlan.restaurants;

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Restaurants to Visit</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant, index) => (
          <RestaurantCardItem key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantsToVisit;
