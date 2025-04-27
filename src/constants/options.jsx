export const selectTravelersList = [
    {
      id: 1,
      title: 'Just me',
      desc: 'A sole traveler in exploration',
      icon: '✈️',
      people: '1',
    },

    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 people'
    },
    {
        id:3,
        title:'Family & Friends',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 people'

    },
    // {
    //     id:4,
    //     title:'Friends',
    //     desc:'A bunch of thrill-seekers',
    //     icon:'🧑‍🧑‍🧒‍🧒'
    // },
  ]

  export const SelectbudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay concious about costs',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰'
    },
    {
        id:3,
        title:'Luxary',
        desc:"don't worry about cash",
        icon:'💸'
    },

  ]

  //export const AI_PROMPT = 'Generate Travel plan for Location : {location},for {totalDays} Days for {traveler} with a {budget} budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName. Place Details, Place Image url, Geo Coordinates, ticket Pricing. Time t travel each of the location for {totalDays} days with each day plan wIth best time to visit in JSON format.'

  



//   export const AI_PROMPT = `Generate a travel plan for Location: {location}, for {totalDays} days for {traveler} traveler(s) with a {budget} budget.

// The response MUST be in valid JSON format and strictly adhere to the following structure:

// \`\`\`json
// {
  
  
//       "travelPlan": {
//         "budget": "(string) - The specified budget (e.g., Cheap, Moderate, Luxury).",
//         "duration": "(string) - The total duration of the trip (e.g., '4 Days').",
//         "hotelOptions": [
//           {
//             "hotelName": "(string) - The name of the hotel.",
//             "hotelAddress": "(string) - The full address of the hotel.",
//             "price": "(string) - The price range per night (e.g., '$40 - $80/night').",
//             "hotelImageUrl": "(string) - The URL of an image of the hotel.",
//             "geoCoordinates": {
//               "latitude": "(number) - The latitude of the hotel.",
//               "longitude": "(number) - The longitude of the hotel."
//             },
//             "rating": "(number) - The hotel's rating (e.g., 3.5).",
//             "description": "(string) - A brief description of the hotel."
//           },
//           // ... more hotel options
//         ],
//         "itinerary": {
//           "day1": {
//             "theme": "(string, optional) - A theme for the activities of this day.",
//             "activities": [
//               {
//                 "placeName": "(string) - The name of the place to visit.",
//                 "placeDetails": "(string) - A brief description or key details about the place.",
//                 "placeImageUrl": "(string) - The URL of an image of the place.",
//                 "geoCoordinates": {
//                   "latitude": "(number) - The latitude of the place.",
//                   "longitude": "(number) - The longitude of the place."
//                 },
//                 "ticketPricing": "(string) - Information about ticket costs (e.g., 'Free', '$29').",
//                 "travelTime": "(string) - Estimated travel time to this location from the previous one.",
//                 "bestTimeToVisit": "(string, optional) - The recommended time of day to visit."
//               },
//               // ... more activities for day 1
//             ]
//           },
//           "day2": {
//             "theme": "(string, optional) - A theme for the activities of this day.",
//             "activities": [
//               // ... activities for day 2
//             ]
//           },
//           // ... more days based on {totalDays}
//         },
//         "location": "(string) - The target location of the trip.",
//         "travelers": "(number) - The number of travelers.",
//         "userEmail": "(string, optional) - The user's email (if available)."
//       },
//       "userSelection": {
//         "budget": "(string) - The user's selected budget.",
//         "location": "(string) - The user's selected location.",
//         "noOfDays": "(string) - The user's selected number of days.",
//         "traveler": "(string) - The user's selected number of travelers."
//       }
    
// }
// \`\`\`

// Generate the travel plan details, hotel options list (with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions), and itinerary (with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time to travel to each location for {totalDays} days, and best time to visit for each activity) according to this JSON structure. Ensure all data types match the specifications within the structure.
// `;

export const AI_PROMPT = `Generate a travel plan for Location: {location}, for {totalDays} days for {traveler} traveler(s) with a {budget} budget.

The response MUST be in valid JSON format and strictly adhere to the following structure:

\`\`\`json
{
  
  
      "travelPlan": {
        "budget": "(string) - The specified budget (e.g., Cheap, Moderate, Luxury).",
        "duration": "(string) - The total duration of the trip (e.g., '4 Days').",
        "hotelOptions": [
          {
            "hotelName": "(string) - The name of the hotel.",
            "hotelAddress": "(string) - The full address of the hotel.",
            "price": "(string) - The price range per night (e.g., '$40 - $80/night').",
            "hotelImageUrl": "(string) - The URL of an image of the hotel.",
            "geoCoordinates": {
              "latitude": "(number) - The latitude of the hotel.",
              "longitude": "(number) - The longitude of the hotel."
            },
            "rating": "(number) - The hotel's rating (e.g., 3.5).",
            "description": "(string) - A brief description of the hotel."
          }
          // ... more hotel options
        ],
        "itinerary": {
          "day1": {
            "theme": "(string, optional) - A theme for the activities of this day.",
            "activities": [
              {
                "placeName": "(string) - The name of the place to visit.",
                "placeDetails": "(string) - A brief description or key details about the place.",
                "placeImageUrl": "(string) - The URL of an image of the place.",
                "geoCoordinates": {
                  "latitude": "(number) - The latitude of the place.",
                  "longitude": "(number) - The longitude of the place."
                },
                "ticketPricing": "(string) - Information about ticket costs (e.g., 'Free', '$29').",
                "travelTime": "(string) - Estimated travel time to this location from the previous one.",
                "bestTimeToVisit": "(string, optional) - The recommended time of day to visit."
              }
              // ... more activities for day 1
            ]
          },
          "day2": {
            "theme": "(string, optional) - A theme for the activities of this day.",
            "activities": [
              // ... activities for day 2
            ]
          }
          // ... more days based on {totalDays}
        },
        "restaurants": [
          {
            "restaurantName": "(string) - The name of the restaurant.",
            "restaurantAddress": "(string) - The full address of the restaurant.",
            "cuisineType": "(string) - Type of cuisine offered (e.g., Italian, Indian, Chinese).",
            "priceRange": "(string) - Estimated meal cost (e.g., '$10 - $20 per person').",
            "restaurantImageUrl": "(string) - The URL of an image of the restaurant.",
            "geoCoordinates": {
              "latitude": "(number) - The latitude of the restaurant.",
              "longitude": "(number) - The longitude of the restaurant."
            },
            "rating": "(number) - The restaurant's rating (e.g., 4.2).",
            "description": "(string) - A brief description of the restaurant."
          }
          // ... more restaurant options
        ],
        "transportHubs": [
          {
            "hubName": "(string) - Name of the transport hub (e.g., Airport, Train Station).",
            "hubType": "(string) - Type of hub (e.g., 'Airport', 'Bus Terminal', 'Train Station').",
            "hubAddress": "(string) - Full address of the transport hub.",
            "geoCoordinates": {
              "latitude": "(number) - Latitude of the hub.",
              "longitude": "(number) - Longitude of the hub."
            },
            "description": "(string) - Short details about the hub (e.g., 'Main airport serving the city').",
            "distanceFromCityCenter": "(string) - Approximate distance to the city center (e.g., '15 km')."
          }
          // ... more transport hub options
        ],
        "location": "(string) - The target location of the trip.",
        "travelers": "(number) - The number of travelers.",
        "userEmail": "(string, optional) - The user's email (if available)."
      },
      "userSelection": {
        "budget": "(string) - The user's selected budget.",
        "location": "(string) - The user's selected location.",
        "noOfDays": "(string) - The user's selected number of days.",
        "traveler": "(string) - The user's selected number of travelers."
      }
    
}
\`\`\`

Generate the travel plan details, hotel options list (with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions), itinerary (with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time to travel to each location for {totalDays} days, and best time to visit for each activity), restaurant list, and transport hub list according to this JSON structure. Ensure all data types match the specifications within the structure.`;
