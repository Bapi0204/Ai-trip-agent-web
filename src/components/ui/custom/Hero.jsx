import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router'
function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1
      className='font-extrabold text-[50px] text-center mt-16'>
          <span className='text-[#f56551]'>Discover Your next Adventure with AI:</span>Personalize Itineraries at your Fingertips
      </h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom Itineraries tailored to your interests and budget</p>
      <Link to={'/create-trip'}>
        <Button>Get Started,It's free.</Button>
      </Link>
      
      <img src='/travel-concept-with-landmarks.jpg'/>
      
    </div>
  )
}

export default Hero

// import React from 'react';
// import { Button } from '../button';
// import { Link } from 'react-router-dom'; // Corrected import for Link

// function Hero() {
//   return (
//     <div
//       className='flex flex-col items-center mx-auto max-w-screen-lg gap-9 py-16' // Adjusted max-width and added padding
//       style={{
//         backgroundImage: `url('/traveling-concept-with-landmarks.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: 'calc(100vh - /* Adjust for your header height if fixed */ 60px)', // Example adjustment
//         color: 'white', // Ensure text is readable on the background
//         textAlign: 'center', // Center text content
//         padding: '2rem', // Add some padding around the text content
//       }}
//     >
//       <h1 className='font-extrabold text-4xl sm:text-5xl md:text-[50px] mt-0'>
//         <span className='text-[#f56551]'>Discover Your next Adventure with AI:</span>Personalize Itineraries at your Fingertips
//       </h1>
//       <p className='text-lg sm:text-xl text-gray-200'>Your personal trip planner and travel curator, creating custom Itineraries tailored to your interests and budget</p>
//       <Link to={'/create-trip'}>
//         <Button variant="primary">Get Started, It's free.</Button> {/* Added variant for styling */}
//       </Link>
//       {/* Removed the img tag as the image is now the background */}
//     </div>
//   );
// }

// export default Hero;