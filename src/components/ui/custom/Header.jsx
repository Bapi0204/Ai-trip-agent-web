// // import React, { useEffect } from 'react'
// // import { Button } from '../button'
// // import { useState } from 'react';
// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverTrigger,
// // } from "@/components/ui/popover"
// // import { googleLogout } from '@react-oauth/google';
// // import { useNavigate, useNavigation } from 'react-router';
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog"

// // function Header() {

// //   const user=JSON.parse(localStorage.getItem('user'));
// //   const [opDailog,setOpDailog]=useState(false);
// //   useEffect(()=>{
// //     console.log(user)
// //   },[])

// //   return (
// //     <div className='p-3 shadow-sm flex justify-between items-center px-5'>
// //       <img src='/logo.svg'/>
// //       <div className='flex items-center gap-3'>
// //         {user ?
// //           <div>
// //             <Button variant='outline' classname='rounded-full'>My Trip</Button>
// //             <img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/>
// //             <Popover>
// //               <PopoverTrigger>
// //                 <img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/>
// //               </PopoverTrigger>
// //               <PopoverContent>
// //                 <h2 onClick={()=>{
// //                   googleLogout();
// //                   localStorage.clear();
// //                   window.location.reload();

// //                 }}>Logout</h2>
// //               </PopoverContent>
// //             </Popover>

// //           </div>
// //           :
// //           <Button>Sign In</Button>
// //         }
       
// //       </div>
// //     </div>
// //   )
// // }

// // export default Header

// import React, { useEffect, useState } from 'react';
// import { Button } from '../button';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { googleLogout } from '@react-oauth/google';
// import { useNavigate } from 'react-router';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { FcGoogle } from "react-icons/fc";

// function Header() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const [opDailog, setOpDailog] = useState(false);
  

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => {
//       console.log(codeResp);
//       axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResp?.access_token}`, {
//         headers: {
//           Authorization: `Bearer ${codeResp?.access_token}`,
//           Accept: 'application/json',
//         },
//       })
//         .then((resp) => {
//           console.log(resp.data);
//           localStorage.setItem('user', JSON.stringify(resp.data));
//           setOpDailog(false); // Close the dialog
//           window.location.reload(); // Reload to update the header
//         })
//         .catch((err) => {
//           console.error('Error fetching user profile:', err);
//           toast.error("Failed to sign in with Google");
//         });
//     },
//     onError: (error) => console.log(error)
//   });

//   return (
//     <div className='p-3 shadow-sm flex justify-between items-center px-5'>
//       <img src='/logo.svg' alt="Logo" />
//       <div className='flex items-center gap-3'>
//         {user ?
//           <div>
//             <Button variant='outline' classname='rounded-full'>My Trip</Button>
//             <Popover>
//               <PopoverTrigger>
//                 <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt="User Avatar" />
//               </PopoverTrigger>
//               <PopoverContent>
//                 <h2 onClick={() => {
//                   googleLogout();
//                   localStorage.clear();
//                   window.location.reload();
//                 }}>Logout</h2>
//               </PopoverContent>
//             </Popover>
//           </div>
//           :
//           <Button onClick={() => setOpDailog(true)}>Sign In</Button>
//         }
//       </div>

//       <Dialog open={opDailog} onOpenChange={setOpDailog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>
//               <img src="/logo.svg" alt="Logo" className="mb-4" />
//               <h2 className="font-bold text-lg mt-2">Sign In with Google</h2>
//             </DialogTitle>
//             <DialogDescription asChild>
//               <div>
//                 <p>Sign in to the App with Google authentication securely</p>
//                 <Button
//                   onClick={() =>
//                     login({
//                       onError: (err) => {
//                         console.error(err);
//                         toast.error("Google Sign-In failed");
//                       }
//                     })
//                   }
//                   className="w-full mt-7 flex gap-4 items-center"
//                 >
//                   <FcGoogle className="h-7 w-7" />
//                   Sign in With Google
//                 </Button>
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default Header;

import React, { useEffect, useState } from 'react';
import { Button } from '../button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { toast } from 'sonner';
import { FcGoogle } from "react-icons/fc";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [opDailog, setOpDailog] = useState(false);
 

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResp?.access_token}`, {
        headers: {
          Authorization: `Bearer ${codeResp?.access_token}`,
          Accept: 'application/json',
        },
      })
        .then((resp) => {
          console.log(resp.data);
          localStorage.setItem('user', JSON.stringify(resp.data));
          setUser(resp.data); // Update the user state
          setOpDailog(false); // Close the dialog
        })
        .catch((err) => {
          console.error('Error fetching user profile:', err);
          toast.error("Failed to sign in with Google");
        });
    },
    onError: (error) => console.log(error)
  });

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null); // Update the user state
  };

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src='/logo.svg' alt="Logo" />
      <div className='flex items-center gap-3'>
        {user ? (
          <div className="flex items-center gap-3">
             <a href='/exchange'>
              <Button variant='outline' className='rounded-full'>Exchange Rate</Button>
            </a>
            <a href='/weather'>
              <Button variant='outline' className='rounded-full'>Weather Forcast</Button>
            </a>
            <a href='/create-trip'>
              <Button variant='outline' className='rounded-full'>+ Create Trip</Button>
            </a>

            <a href='/my-trips'>
            <Button variant='outline' className='rounded-full'>My Trip</Button>
            </a>

            <a href='/contact'>
            <Button variant='outline' className='rounded-full'>Contact</Button>
            </a>
            <Popover>
              <PopoverTrigger className="cursor-pointer">
                <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt="User Avatar" />
              </PopoverTrigger>
              <PopoverContent className="p-4">
                <h2 onClick={handleLogout} className="cursor-pointer hover:underline">Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpDailog(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={opDailog} onOpenChange={setOpDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <img src="/logo.svg" alt="Logo" className="mb-4" />
              <h2 className="font-bold text-lg mt-2">Sign In with Google</h2>
            </DialogTitle>
            <DialogDescription asChild>
              <div>
                <p>Sign in to the App with Google authentication securely</p>
                <Button
                  onClick={() =>
                    login({
                      onError: (err) => {
                        console.error(err);
                        toast.error("Google Sign-In failed");
                      }
                    })
                  }
                  className="w-full mt-7 flex gap-4 items-center"
                >
                  <FcGoogle className="h-7 w-7" />
                  Sign in With Google
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;