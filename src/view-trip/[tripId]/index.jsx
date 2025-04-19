import infoSection from '../componenets/infoSection';
// import React,{useEffect, useState} from 'react'
// import { useParams } from 'react-router'
// import { toast } from 'sonner';
// import { db } from '@/servIce/firebaseconfig';
// import { doc,getDoc } from 'firebase/firestore';
// function Viewtrip() {
//   const {tripId} =useParams();
//   const [trip,setTrip] = useState([]);
//   useEffect(()=>{
//     tripId&&GetTripData();
//   },[tripId])
//   const GetTripData=async()=>{
//     const docRef=doc(db,'AITrips',tripId);
//     const docSnap=await getDoc(docRef);

//     if(docSnap.exists()){
//       console.log('Document:',docSnap.data());
//       setTrip(docSnap.data());
//     }
//     else{
//       console.log("No such Document");
//       toast('no trip Found!')
//     }

    
//   }
//   return (
//     <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
//       {/* Information Section */}
//         <infoSection trip={trip}/>
//       {/* Recommended Hotels */}
//       {/* Daily plan */}
//       {/* Footer */}

//     </div>
//   )
// }

// export default Viewtrip

import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { toast } from 'sonner';
import { db } from '@/servIce/firebaseconfig';
import { doc,getDoc } from 'firebase/firestore';
import InfoSection from '../componenets/infoSection'; // Corrected import casing
import Hotels from '../componenets/Hotels';
import PlacesTovisit from '../componenets/PlacesTovisit';
import Footer from '../componenets/Footer';

function Viewtrip() {
  const {tripId} =useParams();
  // const { tripId } = useParams();
  console.log("Fetching trip with ID:", tripId);
  const [trip,setTrip] = useState([]);
  useEffect(()=>{
    tripId&&GetTripData();
  },[tripId])
  const GetTripData=async()=>{
    const docRef=doc(db,'AITrips',tripId);
    const docSnap=await getDoc(docRef);

    if(docSnap.exists()){
      console.log('Document:',docSnap.data());
      setTrip(docSnap.data());
    }
    else{
      console.log("No such Document");
      toast('no trip Found!')
    }
  }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Information Section */}
      <InfoSection trip={trip}/> {/* Corrected component usage casing */}
      {/* Recommended Hotels */}
      <Hotels trip={trip}/>
      {/* Daily plan */}
      <PlacesTovisit trip={trip}/>
      {/* Footer */}
      <Footer trip={trip}/>
    </div>
  )
}

export default Viewtrip