  import { Input } from '@/components/ui/input';
  import React, { useEffect, useState } from 'react';
  import Autocomplete from 'react-google-autocomplete';
  import { AI_PROMPT, SelectbudgetOptions, selectTravelersList } from '@/constants/options';
  import { Button } from '@/components/ui/button';
  import { toast } from 'sonner';
  import { callGeminiAPI } from '@/servIce/Aimodel';
  import { FcGoogle } from "react-icons/fc";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { useGoogleLogin } from '@react-oauth/google';
  import axios from 'axios';
  import { doc, setDoc } from "firebase/firestore"; 
  import { AiOutlineLoading3Quarters } from "react-icons/ai";
  import { db } from '@/servIce/firebaseconfig';
  import { useNavigate } from 'react-router';

  function CreateTrip() {
    const [place, setPlace] = useState(null);
    const [formData, setFormData] = useState({});
    const [generatedTrip, setGeneratedTrip] = useState(null); // State for the generated trip data
    const [error, setError] = useState(null); // State for any errors
    const [loading, setLoading] = useState(false); // State for loading
    const [opDailog,setOpDailog]=useState(false);
    const navigate=useNavigate();
    const handleInputChange = (name, value) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    useEffect(() => {
      console.log(formData);
    }, [formData]);
  
    // const login=useGoogleLogin({
    //   onSuccess:(codeResp)=>console.log(codeResp),
    //   onError:(error)=>console.log(error)
    // });

    const login = useGoogleLogin({
      onSuccess: (codeResp) => {
        console.log(codeResp);
        // Immediately fetch user profile after successful login code exchange
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResp?.access_token}`, {
          headers: {
            Authorization: `Bearer ${codeResp?.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((resp) => {
          console.log(resp.data);
          localStorage.setItem('user', JSON.stringify(resp.data));
          setOpDailog(false); // Close the dialog
          onGenerateTrip(); // Call onGenerateTrip again after successful login
        })
        .catch((err) => {
          console.error('Error fetching user profile:', err);
          toast.error("Failed to sign in with Google");
        });
      },
      onError: (error) => console.log(error)
    });
    const onGenerateTrip = async () => {
      const user = localStorage.getItem('user');


      if(!user){
        setOpDailog(true)
      }
      const { location, noOfDays, budget, traveler } = formData;
      if (!location || !noOfDays || !budget || !traveler) {
        toast.error("Please fill all details");
        return;
      }
  
      setLoading(true);
      setError(null); // Clear any previous error
  
      const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', location)
        .replace(/{totalDays}/g, noOfDays)
        .replace('{traveler}', traveler)
        .replace('{budget}', budget);
  
      console.log('Final Prompt:', FINAL_PROMPT);
  
      try {
        const generatedTripData = await callGeminiAPI(FINAL_PROMPT);
        console.log('Generated Trip Data:', generatedTripData);
        setGeneratedTrip(generatedTripData); // Update the state
        setLoading(false);
        SaveAiTrip(generatedTripData);
      } catch (err) {
        console.error('Failed to generate trip plan:', err);
        toast.error("Failed to generate trip plan");
        setError(err.message || "Something went wrong while generating the trip."); // Update the error state
      } finally {
        setLoading(false);
      }
    };


    const SaveAiTrip=async(TripData)=>{
      setLoading(true);
      const docId=Date.now().toString();
      const user =JSON.parse(localStorage.getItem('user'));
// Add a new document in collection "cities"
      await setDoc(doc(db, "AITrips",docId), {
        userSelection:formData,
        tripData:JSON.parse(TripData),
        userEmail:user?.email,
        id:docId

});
    setLoading(false);
    navigate('/view-trip/'+docId)
    }
  
  

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your preferences 🏕️🌴</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        {/* Destination */}
        <div>
          <h2 className="text-xl my-3 font-medium">What is your destination choice?</h2>
          <Autocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            onPlaceSelected={(place) => {
              setPlace(place);
              handleInputChange('location', place.formatted_address);
            }}
            options={{
              types: ['(cities)'],
              // componentRestrictions: { country: 'us' }, // optional
            }}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Trip Duration */}
        <div>
          <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
          <Input
            placeholder="Ex. 3"
            type="number"
            className="w-full"
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>

        {/* Budget Options */}
        <div>
          <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectbudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange('budget', item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-shadow-lg
                  ${formData?.budget==item.title&&'shadow-lg border-black'}
                `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Companions */}
        <div>
          <h2 className="text-xl my-3 font-medium">Who are you planning to travel with?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {selectTravelersList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange('traveler', item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-shadow
                  ${formData?.traveler==item.people&&'shadow-lg border-black'}
                  `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="my-10 flex justify-end">
          <Button 
          disabled={loading}
          onClick={onGenerateTrip}>
            {loading?
            <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/>:'Generate Plan'}
            </Button>
        </div>
        <Dialog open={opDailog} onOpenChange={setOpDailog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>
        <img src="/logo.svg" alt="Logo" />
        <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
      </DialogTitle>
      <DialogDescription asChild>
        <div>
          <p>Sign in to the App with Google authentication securely</p>

          <Button 
          
            onClick={() =>
              login({
                // onSuccess: GetUserProfile,
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
    </div>
  );
}

export default CreateTrip;
