import React, { useState, useEffect } from 'react';
import { GetPlaceDetails } from '@/servIce/GlobalApi';
import { PHOTO_REF_URL } from '@/servIce/GlobalApi';

function TransportHubCardItem({ hub }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (hub) {
      GetHubPhoto();
    }
  }, [hub]);

  const GetHubPhoto = async () => {
    const data = {
      textQuery: hub.hubName,
    };
    try {
      const result = await GetPlaceDetails(data);
      if (result.data?.places?.[0]?.photos?.[0]) {
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[0].name);
        setPhotoUrl(PhotoUrl);
      }
    } catch (error) {
      console.error('Failed to fetch hub photo', error);
    }
  };

  const imageUrl = hub.hubImageUrl || '/placeholder.jpg';

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hub.hubName)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border rounded-xl p-3 mt-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || imageUrl}
          alt={hub.hubName}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{hub.hubName}</h2>
          <p className="text-sm text-gray-400">{hub.description}</p>
          <p className="text-sm text-gray-500 mt-1">{hub.hubType}</p>
          {hub.distanceFromCityCenter && (
            <p className="mt-1 text-sm font-semibold text-indigo-600">
              📍 {hub.distanceFromCityCenter} from City Center
            </p>
          )}
          {hub.hubAddress && (
            <p className="text-xs text-gray-500 mt-1">{hub.hubAddress}</p>
          )}
        </div>
      </div>
    </a>
  );
}

export default TransportHubCardItem;

