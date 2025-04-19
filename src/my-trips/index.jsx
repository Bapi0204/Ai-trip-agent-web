

// import { Navigation } from 'lucide-react';
// import React, { useEffect } from 'react'
// import { useNavigation } from 'react-router';
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from '@/servIce/firebaseconfig';
// import UserTripCardItem from './components/UserTripCardItem';
// import { useState } from 'react';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Example loading icon

// function MyTrips() {
//   const [userTrips, setUserTrips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();

//   useEffect(() => {
//     GetUserTrips();
//   }, []);

//   const GetUserTrips = async () => {
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (!user) {
//       navigation('/');
//       return;
//     }

//     setLoading(true);
//     setUserTrips([]);

//     try {
//       const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
//       const querySnapshot = await getDocs(q);
//       const trips = [];
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
//         trips.push(doc.data());
//       });
//       setUserTrips(trips);
//     } catch (error) {
//       console.error("Error fetching user trips:", error);
//       // Optionally display an error message to the user
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='sm:p-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>
//         My Trips
//       </h2>
//       {/* {loading ? (
//         <div className="flex justify-center items-center mt-10">
//           <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin" />
//           <span className="ml-2">Loading your trips...</span>
//         </div>
//       ) : userTrips.length > 0 ? ( */}
//         <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//           {userTrips.length > 0 ? userTrips.map((trip, index) => (
//             <UserTripCardItem key={index} trip={trip} />
//           )}
//           :[1,2,3,4,5,6].map((item,index)=>(
//             <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>

//             </div>
//           ))
//         </div>
//       // ) : (
//       //   <p className="mt-10 text-gray-500">No saved trips yet.</p>
//       // )}
//     </div>
//   );
// }

// export default MyTrips;

import { Navigation } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '@/servIce/firebaseconfig';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigation('/');
      return;
    }

    setLoading(true);
    setUserTrips([]);

    try {
      const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
      const querySnapshot = await getDocs(q);
      const trips = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        trips.push(doc.data());
      });
      setUserTrips(trips);
    } catch (error) {
      console.error("Error fetching user trips:", error);
      // Optionally display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='sm:p-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>
        My Trips
      </h2>
      <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {userTrips.length > 0 ? (
          userTrips.map((trip, index) => (
            <UserTripCardItem key={index} trip={trip} />
          ))
        ) : loading ? (
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'></div>
          ))
        ) : (
          <p className="mt-10 text-gray-500">No saved trips yet.</p>
        )}
      </div>
    </div>
  );
}

export default MyTrips;