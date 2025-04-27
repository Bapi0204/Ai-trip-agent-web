

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { GetPlaceDetails } from '@/servIce/GlobalApi';
// import { PHOTO_REF_URL } from '@/servIce/GlobalApi';

// function UserTripCardItem({ trip }) {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const [photoUrl,setPhotoUrl]=useState();
//   useEffect(() => {
//       if (trip) {
//         GetPlacePhoto();
//       }
//     }, [trip]);
    
//     const GetPlacePhoto = async () => {
//       const data={
//         textQuery:trip?.userSelection?.location
//       }
//       const result=await GetPlaceDetails(data).then(resp=>{
//         console.log(resp.data.places[0].photos[3])
//         const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
//         console.log(PhotoUrl);
//         setPhotoUrl(PhotoUrl);
//       })
//     }
    

//   const handleViewTrip = () => {
//     navigate(`/view-trip/${trip?.id}`); // Navigate to the view trip page with the trip ID
//   };

//   return (
//     <div
//       className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
//       onClick={handleViewTrip} // Add onClick handler to the card
//     >
//       <div className="relative w-full aspect-video">
//         <img
//           src={photoUrl || '/placeholder.jpg'}
//           alt={trip?.userSelection?.location}
//           className='object-cover w-full  rounded-t-xl h-[220px]'
//           onError={(e) => {
//             e.target.onerror = null; // Prevent infinite loop on error
//             e.target.src = '/placeholder.jpg'; // Fallback image
//           }}
//         />
//       </div>
//       <div className="p-4">
//         <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
//         <h2 className='text-sm text-gray-500'>
//           {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget.
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default UserTripCardItem;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GetPlaceDetails } from '@/servIce/GlobalApi';
// import { PHOTO_REF_URL } from '@/servIce/GlobalApi';
// import { Bookmark, BookmarkCheck } from 'lucide-react'; // Lucide icons for bookmark

// function UserTripCardItem({ trip }) {
//   const navigate = useNavigate();
//   const [photoUrl, setPhotoUrl] = useState();
//   const [isBookmarked, setIsBookmarked] = useState(false); // New state for bookmark

//   useEffect(() => {
//     if (trip) {
//       GetPlacePhoto();
//     }
//   }, [trip]);

//   const GetPlacePhoto = async () => {
//     const data = { textQuery: trip?.userSelection?.location };
//     await GetPlaceDetails(data).then(resp => {
//       const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
//       setPhotoUrl(PhotoUrl);
//     });
//   };

//   const handleViewTrip = () => {
//     navigate(`/view-trip/${trip?.id}`);
//   };

//   const handleBookmarkClick = (e) => {
//     e.stopPropagation(); // Prevent triggering the card click
//     setIsBookmarked(!isBookmarked);
//   };

//   return (
//     <div
//       className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 relative"
//       onClick={handleViewTrip}
//     >
//       {/* Bookmark button */}
//       <div
//         onClick={handleBookmarkClick}
//         className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md z-10 hover:scale-110 transition-transform"
//       >
//         {isBookmarked ? (
//           <BookmarkCheck className="text-blue-500 w-6 h-6" />
//         ) : (
//           <Bookmark className="text-gray-500 w-6 h-6" />
//         )}
//       </div>

//       <div className="relative w-full aspect-video">
//         <img
//           src={photoUrl || '/placeholder.jpg'}
//           alt={trip?.userSelection?.location}
//           className='object-cover w-full rounded-t-xl h-[220px]'
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = '/placeholder.jpg';
//           }}
//         />
//       </div>
//       <div className="p-4">
//         <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
//         <h2 className='text-sm text-gray-500'>
//           {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget.
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default UserTripCardItem;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetPlaceDetails } from '@/servIce/GlobalApi';
import { PHOTO_REF_URL } from '@/servIce/GlobalApi';
import { Bookmark, BookmarkCheck } from 'lucide-react';

function UserTripCardItem({ trip }) {
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = useState();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
      checkIfBookmarked();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = { textQuery: trip?.userSelection?.location };
    await GetPlaceDetails(data).then(resp => {
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    });
  };

  // Check localStorage if this trip is already bookmarked
  const checkIfBookmarked = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedTrips')) || [];
    setIsBookmarked(bookmarks.includes(trip?.id));
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedTrips')) || [];

    if (isBookmarked) {
      // Remove from bookmarks
      bookmarks = bookmarks.filter(id => id !== trip?.id);
    } else {
      // Add to bookmarks
      bookmarks.push(trip?.id);
    }

    localStorage.setItem('bookmarkedTrips', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const handleViewTrip = () => {
    navigate(`/view-trip/${trip?.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 relative"
      onClick={handleViewTrip}
    >
      {/* Bookmark button */}
      <div
        onClick={handleBookmarkClick}
        className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md z-10 hover:scale-110 transition-transform"
      >
        {isBookmarked ? (
          <BookmarkCheck className="text-blue-500 w-6 h-6" />
        ) : (
          <Bookmark className="text-gray-500 w-6 h-6" />
        )}
      </div>

      <div className="relative w-full aspect-video">
        <img
          src={photoUrl || '/placeholder.jpg'}
          alt={trip?.userSelection?.location}
          className='object-cover w-full rounded-t-xl h-[220px]'
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder.jpg';
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
