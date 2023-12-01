// weatherAPI.js

const API_KEY = '3ae3b120a1d5d252d2f15d7b372a9506';

const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        
        data.time= await getHour(data.coord.lat, data.coord.lon);
        
        return data;
    } catch (error) {
        console.error('Error fetching weather data:');
        throw error;
    }
};


const getHour = async (lat,lon) => {
    try {
        const response = await fetch(`https://timeapi.io/api/Time/current/coordinate?latitude=${lat}&longitude=${lon}`);
        const data = await response.json();
        return (data) ;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
export default getWeatherData;