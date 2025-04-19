// import { Button } from '@/components/ui/button';
// import React from 'react';
// import { IoMdShareAlt } from "react-icons/io";
// function InfoSection({ trip }) {
//   return (
//     <div>

//       <img
//         src="/placeholder.jpg"
//         className="h-[340px] w-full object-cover rounded-b-xl"
//         alt={trip?.userSelection?.location || "Trip Location"}
//       />
//       <div className='flex justify-between items-center'>
//         <div className="my-5 flex flex-col gap-2">
//             <h2 className="font-bold text-2xl">
//             {trip?.userSelection?.location} {/* Access the string directly */}
//             </h2>
//             <div className='flex flex-gap-5'>
//                 <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅{trip?.userSelection?.noOfDays} Day</h2>
//                 <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰{trip?.userSelection?.budget} Budget</h2>
//                 <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂No. of Traveler:{trip?.userSelection?.traveler}</h2>
//             </div>
//         </div>
//         <Button><IoMdShareAlt /></Button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;


import { Button } from '@/components/ui/button';
import { GetPlaceDetails } from '@/servIce/GlobalApi';
import React from 'react';
import { IoMdShareAlt } from "react-icons/io";
import { useEffect } from 'react';
import { useState } from 'react';
import { PHOTO_REF_URL } from '@/servIce/GlobalApi';
import axios from 'axios';

function InfoSection({ trip }) {

  const [photoUrl,setPhotoUrl]=useState();
  const { location, noOfDays, budget, traveler } = trip?.userSelection || {};

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);
  
  const GetPlacePhoto = async () => {
    const data={
      textQuery:location
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3])
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      console.log(PhotoUrl);
      setPhotoUrl(PhotoUrl);
    })
  }
  
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      <img
        src={photoUrl}
        className="h-[340px] w-full object-cover"
        alt={location || "Trip Location"}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-800">{location}</h2>
          <div className="flex flex-wrap gap-3 text-sm md:text-base">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              📅 {noOfDays} {noOfDays > 1 ? 'Days' : 'Day'}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              💰 Budget: {budget}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              🥂 {traveler} {traveler > 1 ? 'Travelers' : 'Traveler'}
            </span>
          </div>
        </div>

        <Button
            className="flex items-center gap-2 bg-white text-blue-600 border border-gray-300 hover:bg-blue-50 hover:text-blue-700 transition-all rounded-full px-4 py-2 shadow-md"
            >
            <IoMdShareAlt className="text-lg" />
            <span className="text-sm font-medium">Share</span>
        </Button>

      </div>
    </div>
  );
}

export default InfoSection;
