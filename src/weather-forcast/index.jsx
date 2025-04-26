
// import React, { useState } from 'react';

// function Weather() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

//   const getWeather = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setWeather(null);

//     try {
//       const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${WEATHER_API_KEY}`;
//       const geoRes = await fetch(geoUrl);
//       if (!geoRes.ok) throw new Error('City not found!');
//       const geoData = await geoRes.json();
//       if (!geoData.length) throw new Error('City not found!');

//       const { lat, lon } = geoData[0];
//       const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
//       const weatherRes = await fetch(weatherUrl);
//       if (!weatherRes.ok) throw new Error('Failed to fetch weather data!');
//       const weatherData = await weatherRes.json();

//       setWeather({
//         city: city,
//         temperature: weatherData.main.temp,
//         condition: weatherData.weather[0].description,
//       });
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
//         <h1 className="text-3xl font-bold text-blue-700 mb-6">🌤️ Weather Checker</h1>
//         <form onSubmit={getWeather} className="flex items-center justify-between gap-2 mb-6">
//           <input
//             type="text"
//             placeholder="Enter city name..."
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
//           >
//             Search
//           </button>
//         </form>

//         {loading && <p className="text-blue-500 font-medium">Fetching weather...</p>}

//         {error && (
//           <div className="mt-4 text-red-500 bg-red-100 px-4 py-2 rounded-lg">
//             ⚠️ {error}
//           </div>
//         )}

//         {weather && (
//           <div className="mt-6 bg-blue-50 p-6 rounded-xl shadow-inner">
//             <h2 className="text-2xl font-semibold text-blue-700">{weather.city}</h2>
//             <p className="text-xl mt-2">🌡️ {weather.temperature}°C</p>
//             <p className="capitalize text-gray-600 mt-1">☁️ {weather.condition}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Weather;
import React, { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';

function Weather() {
  const [city, setCity] = useState('');
  const [place, setPlace] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const GOOGLE_PLACE_API_KEY = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

  const getWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const cityToUse = city; // Already trimmed city from Autocomplete
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityToUse}&appid=${WEATHER_API_KEY}`;
      const geoRes = await fetch(geoUrl);
      if (!geoRes.ok) throw new Error('City not found!');
      const geoData = await geoRes.json();
      if (!geoData.length) throw new Error('City not found!');

      const { lat, lon } = geoData[0];
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
      const weatherRes = await fetch(weatherUrl);
      if (!weatherRes.ok) throw new Error('Failed to fetch weather data!');
      const weatherData = await weatherRes.json();

      setWeather({
        city: cityToUse.charAt(0).toUpperCase() + cityToUse.slice(1),
        temperature: weatherData.main.temp,
        condition: weatherData.weather[0].description,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">🌤️ Weather Checker</h1>
        <form onSubmit={getWeather} className="mb-6">
          <Autocomplete
            apiKey={GOOGLE_PLACE_API_KEY}
            onPlaceSelected={(place) => {
              const fullAddress = place.formatted_address;
              const cityOnly = fullAddress.split(',')[0].trim();
              setPlace(place);
              setCity(cityOnly);
            }}
            options={{ types: ['(cities)'] }}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search city..."
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Get Weather
          </button>
        </form>

        {loading && <p className="text-blue-500 font-medium">Fetching weather...</p>}

        {error && (
          <div className="mt-4 text-red-500 bg-red-100 px-4 py-2 rounded-lg">
            ⚠️ {error}
          </div>
        )}

        {weather && (
          <div className="mt-6 bg-blue-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold text-blue-700">{weather.city}</h2>
            <p className="text-xl mt-2">🌡️ {weather.temperature}°C</p>
            <p className="capitalize text-gray-600 mt-1">☁️ {weather.condition}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
