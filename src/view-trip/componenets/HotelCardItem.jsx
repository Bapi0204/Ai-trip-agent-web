import React from 'react'
import { Link } from 'react-router'
import { GetPlaceDetails } from '@/servIce/GlobalApi';
import { PHOTO_REF_URL } from '@/servIce/GlobalApi';
import { useState } from 'react';
import { useEffect } from 'react';
function HotelCardItem({item}) {
const [photoUrl,setPhotoUrl]=useState();
  useEffect(() => {
    if (item) {
      GetPlacePhoto();
    }
  }, [item]);
  
  const GetPlacePhoto = async () => {
    const data={
      textQuery:item?.hotelName
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3])
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      console.log(PhotoUrl);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <div>
        <Link
              to={`https://www.google.com/maps/search/?api=1&query=${item?.hotelName},${item?.hotelAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={photoUrl}
                alt={item?.hotelName || "Hotel Image"}
                className="h-[220px] w-full object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item?.hotelName}</h3>
                <p className="text-sm text-gray-600">📍 {item?.hotelAddress}</p>
                <p className="text-sm text-green-600 font-medium">💰 {item?.price} per night</p>
                <p className="text-sm text-gray-700">{item?.description}</p>
                <p className="text-sm text-yellow-500 font-medium">⭐ Rating: {item?.rating}</p>
              </div>
            </Link>
    </div>
  )
}

export default HotelCardItem