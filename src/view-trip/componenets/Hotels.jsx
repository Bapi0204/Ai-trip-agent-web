// import React from 'react'

// function Hotels({trip}) {
//   return (
//     <div>
//         <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>

//         <div>
//         {trip?.tripData?.[0]?.travelPlan?.hotelOptions?.map((item, index)=>{
//                 <div>
//                     <img
//         src="/placeholder.jpg"
//         className="h-[340px] w-full object-cover rounded-b-xl"/>
//                 </div>

//             })}
//         </div>
//     </div>
//   )
// }

// export default Hotels
// import React from 'react';
// import { Link } from 'react-router';

// function Hotels({ trip }) {
//   return (
//     <div>
//       <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
//         {trip?.tripData?.[0]?.travelPlan?.hotelOptions?.map((item, index) => (
//           <div key={index} className='hover:scale-110 transition-all cursor-pointer'>
//             <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.hotelName+','+item?.hotelAddress} targe='_blank'>
//             <img
//               src={"/placeholder.jpg"}
//               alt={item?.hotelName || "Hotel Image"}
//               className="h-[340px] w-full object-cover rounded-b-xl"
//             />
//             <div className='my-2 flex flex-col gap-2'>
//                 <h3 className="text-medium mt-2">{item?.hotelName}</h3>
//                 <p className="text-xs text-gray-600">📍{item?.hotelAddress}</p>
//                 <p className="text-sm text-gray-700">💰{item?.price}</p>
//                 <p className="text-sm text-gray-500">{item?.description}</p>
//                 <p className="text-sm text-yellow-500">⭐Rating: {item?.rating}</p>
//             </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;

// import React from 'react';
// import { Link } from 'react-router-dom'; // fixed router import
// import HotelCardItem from './HotelCardItem';

// function Hotels({ trip }) {
//   return (
//     <div className="mt-10">
//       <h2 className="font-bold text-2xl mb-6">Hotel Recommendation</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
//         {trip?.tripData?.[0]?.travelPlan?.hotelOptions?.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
//           >
//             <HotelCardItem item={item}/>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;


import React from 'react';
import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  // Safe navigation using optional chaining, but adapted for the new structure
  const hotelOptions = trip?.tripData?.travelPlan?.hotelOptions;

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl mb-6">Hotel Recommendation</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {hotelOptions?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <HotelCardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;