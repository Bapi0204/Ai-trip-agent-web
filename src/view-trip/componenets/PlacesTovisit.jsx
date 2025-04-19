
// import PlacecardItem from './PlacecardItem';

// function PlacesToVisit({ trip }) {
//   if (
//     !trip ||
//     !trip.tripData ||
//     !trip.tripData[0] ||
//     !trip.tripData[0].travelPlan ||
//     !trip.tripData[0].travelPlan.itinerary
//   ) {
//     return <div>No Places to Visit Found</div>;
//   }

//   const itinerary = trip.tripData[0].travelPlan.itinerary;

//   const orderedDays = Object.keys(itinerary)
//     .filter((key) => key.startsWith('day'))
//     .sort((a, b) => parseInt(a.slice(3), 10) - parseInt(b.slice(3), 10));

//   return (
//     <div className="mt-8">
//       <h2 className="font-bold text-2xl mb-4">Places to Visit</h2>

//       {orderedDays.map((day) => {
//         const dayPlan = itinerary[day];
//         const activities = dayPlan.activities || [];

//         return (
//           <div key={day} className="mb-8">
//             <h3 className="font-bold text-xl mb-2">{`Day ${day.slice(3)}`}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {activities.map((place, index) => (
//                 <PlacecardItem key={`${day}-${index}`} place={place} />
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default PlacesToVisit;
// import PlacecardItem from './PlacecardItem';

// function PlacesToVisit({ trip }) {
//   if (
//     !trip ||
//     !trip.tripData ||
//     !trip.tripData[0] ||
//     !trip.tripData[0].travelPlan
//   ) {
//     return <div>No Places to Visit Found</div>;
//   }

//   const travelPlan = trip.tripData[0].travelPlan;
//   const itinerary = travelPlan.itinerary;
//   const flatPlaces = travelPlan.places;

//   // If flat places array is available
//   if (Array.isArray(flatPlaces) && flatPlaces.length > 0) {
//     return (
//       <div className="mt-8">
//         <h2 className="font-bold text-2xl mb-4">Places to Visit</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {flatPlaces.map((place, index) => (
//             <PlacecardItem key={`flat-${index}`} place={place} />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // If itinerary object exists
//   if (!itinerary || typeof itinerary !== 'object') {
//     return <div>No Places to Visit Found</div>;
//   }

//   const orderedDays = Object.keys(itinerary)
//     .filter((key) => key.startsWith('day'))
//     .sort((a, b) => parseInt(a.slice(3), 10) - parseInt(b.slice(3), 10));

//   return (
//     <div className="mt-8">
//       <h2 className="font-bold text-2xl mb-4">Places to Visit</h2>

//       {orderedDays.map((day) => {
//         const dayPlan = itinerary[day];
//         const partsOfDay = Object.keys(dayPlan || {}).filter(
//           (key) =>
//             key !== 'theme' && key !== 'bestTimeToVisit' && typeof dayPlan[key] === 'object'
//         );

//         return (
//           <div key={day} className="mb-8">
//             <h3 className="font-bold text-xl mb-2">{`Day ${day.slice(3)}`}</h3>

//             {partsOfDay.map((part, idx) => {
//               const partPlan = dayPlan[part];
//               // If it's a list of activities
//               const activities = Array.isArray(partPlan.activities)
//                 ? partPlan.activities
//                 : [partPlan]; // single place map fallback

//               return (
//                 <div key={`${day}-${part}-${idx}`} className="mb-4">
//                   <h4 className="font-semibold text-lg capitalize mb-2">
//                     {part}
//                   </h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {activities.map((place, index) => (
//                       <PlacecardItem key={`${day}-${part}-${index}`} place={place} />
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default PlacesToVisit;

import React from 'react';
import PlacecardItem from './PlacecardItem';

function PlacesToVisit({ trip }) {
  if (
    !trip ||
    !trip.tripData ||
    !trip.tripData.travelPlan || // Adjusted access
    !trip.tripData.travelPlan.itinerary // Adjusted access
  ) {
    return <div>No Places to Visit Found</div>;
  }

  const itinerary = trip.tripData.travelPlan.itinerary; // Adjusted access

  const orderedDays = Object.keys(itinerary)
    .filter((key) => key.startsWith('day'))
    .sort((a, b) => parseInt(a.slice(3), 10) - parseInt(b.slice(3), 10));

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Places to Visit</h2>

      {orderedDays.map((day) => {
        const dayPlan = itinerary[day];
        const activities = dayPlan?.activities || []; // Added optional chaining for safety

        return (
          <div key={day} className="mb-8">
            <h3 className="font-bold text-xl mb-2">{`Day ${day.slice(3)}`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.map((place, index) => (
                <PlacecardItem key={`${day}-${index}`} place={place} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlacesToVisit;
