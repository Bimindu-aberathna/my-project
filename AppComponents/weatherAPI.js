// weatherAPI.js

const API_KEY = '3ae3b120a1d5d252d2f15d7b372a9506';
//ferch data from openweathermap.org for the specific city
const getWeatherData = async (city) => {
    try {
        //combine city name and api key to get the data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        //get the time from timeapi.io  and add it to the data
        data.time= await getHour(data.coord.lat, data.coord.lon);
        
        return data;//return the data
    } catch (error) {
        console.error('Error fetching weather data:');
        throw error;
    }
};

//to get current time for the city
const getHour = async (lat,lon) => {
    try {
        //combine latitude and longitude to get the data
        const response = await fetch(`https://timeapi.io/api/Time/current/coordinate?latitude=${lat}&longitude=${lon}`);
        const data = await response.json();
        return (data) ;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
export default getWeatherData;