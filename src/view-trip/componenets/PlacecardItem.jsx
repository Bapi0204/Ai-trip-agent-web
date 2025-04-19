


import React from 'react'
import { Link } from 'react-router';
import { FaMapMarkedAlt } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import { GetPlaceDetails } from '@/servIce/GlobalApi';
import { PHOTO_REF_URL } from '@/servIce/GlobalApi';
function PlacecardItem({ place }) {
  const [photoUrl,setPhotoUrl]=useState();
    
  
    useEffect(() => {
      if (place) {
        GetPlacePhoto();
      }
    }, [place]);
    
    const GetPlacePhoto = async () => {
      const data={
        textQuery:place.placeName
      }
      const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[3])
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        setPhotoUrl(PhotoUrl);
      })
    }
  const formattedTime = place.travelTime || 'Time not specified';
  const imageUrl = place.placeImageURL || '/placeholder.jpg';

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.placeName)}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='border rounded-xl p-3 mt-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={photoUrl || '/placeholder.jpg'} alt={place.placeName} className='w-[130px] h-[130px] rounded-xl object-cover' />
        <div>
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-gray-400'>{place.placeDetails}</p>
          <p className='mt-1 text-sm font-semibold text-indigo-600'>
            🕒 {formattedTime}
          </p>
          {place.bestTimeToVisit && (
            <h2 className='mt-1 text-sm text-gray-600'>🕰️ Best: {place.bestTimeToVisit}</h2>
          )}
          {place.ticketPricing && (
            <p className='text-sm text-green-700 mt-1'>🎟️ {place.ticketPricing}</p>
          )}
        </div>
      </div>
    </a>
  );
}

export default PlacecardItem;


