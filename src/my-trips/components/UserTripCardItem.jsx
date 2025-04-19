// import React from 'react'

// function UserTripCardItem({trip}) {
//   return (
//     <div >
//         <img src='/placeholder.jpg'
        
//         className='object-cover rounded-xl'
//         />
//         <div>
//           <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
//           <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {userSelection?.budget} Budget.</h2>
//         </div>

//     </div>
//   )
// }

// export default UserTripCardItem

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useEffect } from 'react';
import { useState } from 'react';
import { GetPlaceDetails } from '@/servIce/GlobalApi';
import { PHOTO_REF_URL } from '@/servIce/GlobalApi';

function UserTripCardItem({ trip }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const [photoUrl,setPhotoUrl]=useState();
  useEffect(() => {
      if (trip) {
        GetPlacePhoto();
      }
    }, [trip]);
    
    const GetPlacePhoto = async () => {
      const data={
        textQuery:trip?.userSelection?.location
      }
      const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[3])
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        console.log(PhotoUrl);
        setPhotoUrl(PhotoUrl);
      })
    }
    

  const handleViewTrip = () => {
    navigate(`/view-trip/${trip?.id}`); // Navigate to the view trip page with the trip ID
  };

  return (
    <div
      className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={handleViewTrip} // Add onClick handler to the card
    >
      <div className="relative w-full aspect-video">
        <img
          src={photoUrl || '/placeholder.jpg'}
          alt={trip?.userSelection?.location}
          className='object-cover w-full  rounded-t-xl h-[220px]'
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop on error
            e.target.src = '/placeholder.jpg'; // Fallback image
          }}
        />
      </div>
      <div className="p-4">
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
        <h2 className='text-sm text-gray-500'>
          {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget.
        </h2>
      </div>
    </div>
  );
}

export default UserTripCardItem;