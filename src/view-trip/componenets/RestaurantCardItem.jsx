import React, { useState, useEffect } from 'react';
import { GetPlaceDetails } from '@/servIce/GlobalApi';
import { PHOTO_REF_URL } from '@/servIce/GlobalApi';

function RestaurantCardItem({ restaurant }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (restaurant) {
      GetRestaurantPhoto();
    }
  }, [restaurant]);

  const GetRestaurantPhoto = async () => {
    const data = {
      textQuery: restaurant.restaurantName,
    };
    try {
      const result = await GetPlaceDetails(data);
      if (result.data?.places?.[0]?.photos?.[0]) {
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[0].name);
        setPhotoUrl(PhotoUrl);
      }
    } catch (error) {
      console.error('Failed to fetch restaurant photo', error);
    }
  };

  const formattedPrice = restaurant.priceRange || 'Price not specified';
  const imageUrl = restaurant.restaurantImageUrl || '/placeholder.jpg';

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.restaurantName)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border rounded-xl p-3 mt-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || imageUrl}
          alt={restaurant.restaurantName}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{restaurant.restaurantName}</h2>
          <p className="text-sm text-gray-400">{restaurant.description}</p>
          <p className="text-sm text-gray-500 mt-1">{restaurant.cuisineType}</p>
          <p className="mt-1 text-sm font-semibold text-indigo-600">
            💰 {formattedPrice}
          </p>
          {restaurant.rating && (
            <p className="text-sm text-green-700 mt-1">⭐ Rating: {restaurant.rating}</p>
          )}
          {restaurant.restaurantAddress && (
            <p className="text-xs text-gray-500 mt-1">{restaurant.restaurantAddress}</p>
          )}
        </div>
      </div>
    </a>
  );
}

export default RestaurantCardItem;
