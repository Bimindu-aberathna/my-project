// Import necessary modules and functions
import React, { useState, useEffect } from 'react';
import { ScrollView,TouchableOpacity, Image, View, TextInput, Text, Alert, FlatList, ImageBackground,Keyboard, KeyboardEvent  } from 'react-native';
import { Dimensions } from 'react-native';
//import { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import getWeatherData from './AppComponents/weatherAPI';

//import styles
import { styles } from './AppComponents/App_styles';

//import backgrouf images for day and night
import backgroundImage1 from './AppComponents/images/green-blue-gradient.jpg';
import backgroundImage2 from './AppComponents/images/gradient-black-purple.jpg';


//import weather icons
import cloudy_day_icon from './AppComponents/images/cloudy_day.png';
import cloudy_night_icon from './AppComponents/images/cloudy_night.png';
import light_thunder_day_icon from './AppComponents/images/light_thunder_day.png';
import light_thunder_night_icon from './AppComponents/images/light_thunder_night.png';
import drizzle_day_icon from './AppComponents/images/drizzle_day.png';
import light_rain_day_icon from './AppComponents/images/light_rain_day.png';
import light_rain_night_icon from './AppComponents/images/light_rain_night.png';
import light_snow_day_icon from './AppComponents/images/light_snow_day.png';
import light_snow_night_icon from './AppComponents/images/light_snow_night.png';
import clear_sky_day_icon from './AppComponents/images/clearsky_day.png';
import clear_sky_night_icon from './AppComponents/images/clearsky_night.png';
import fog_day_icon from './AppComponents/images/fog_day.png';
import fog_night_icon from './AppComponents/images/fog_night.png';
import heavy_fog_icon from './AppComponents/images/heavy_fog.png';
import heavy_rain_icon from './AppComponents/images/heavy_rain.png';
import heavy_snow_icon from './AppComponents/images/heavy_snow.png';
import heavy_wind_icon from './AppComponents/images/heavy_wind.png';
import light_wind_day_icon from './AppComponents/images/light_wind_day.png';
import light_wind_night_icon from './AppComponents/images/light_wind_night.png';
import heavy_thunder_icon from './AppComponents/images/heavy_thunder.png';
import drizzle_night_icon from './AppComponents/images/drizzle_night.png';

//get window width and height
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// Define the App component
export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [timeData, setTimeData] = useState("");
  const [Background,setBackground]=useState(require('./AppComponents/images/green-blue-gradient.jpg'));
  const [weatherIcon,setweatherIcon]=useState(require('./AppComponents/images/cloudy_day.png'));
  



//set default city to colombo
useEffect(() => {
    // Fetch weather data for the default city when the component is mounted
    const defaultCity = 'Colombo';
    fetchWeather(defaultCity);
  }, []); 

 //change background image according to time 
useEffect(() => {
  // Check if timeData and weatherData exist
  if (weatherData) {
    // Get the hour from timeData and convert it to a number
    const hour = weatherData.time.hour;

    // Set the background image based on the hour
    if (hour >= 6 && hour < 18) {
      setBackground(backgroundImage1);
    } else {
      setBackground(backgroundImage2);
    }
  }
}, [weatherData]);
// change weather icon according to weather data.description
useEffect(() => {
  // check if dayTime
  if (weatherData) {
    const dayTime = weatherData.time.hour >= 6 && weatherData.time.hour < 18;
    

    switch (weatherData.weather[0].description) {
      case 'thunderstorm with light rain':
        if(dayTime){
        setweatherIcon(light_thunder_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'thunderstorm with rain':
      if(dayTime){
        setweatherIcon(light_thunder_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'thunderstorm with heavy rain':
      if(dayTime){
        setweatherIcon(heavy_thunder_icon);
        }else{
          setweatherIcon(heavy_thunder_icon);
        }
        break;
    case 'light thunderstorm':
      if(dayTime){
        setweatherIcon(light_thunder_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'thunderstorm':
      if(dayTime){
        setweatherIcon(heavy_thunder_icon);
        }else{
          setweatherIcon(heavy_thunder_icon);
        }
        break;
    case 'heavy thunderstorm':
      if(dayTime){
        setweatherIcon(heavy_thunder_icon);
        }else{
          setweatherIcon(heavy_thunder_icon);
        }
        break;
    case 'ragged thunderstorm':
      if(dayTime){
        setweatherIcon(light_thunder_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'thunderstorm with light drizzle':
      if(dayTime){
        setweatherIcon(drizzle_day_icon);
        }else{
          setweatherIcon(drizzle_night_icon);
        }
        break;
    case 'thunderstorm with drizzle':
      if(dayTime){
        setweatherIcon(light_thunder_day_icon);
        }else{
          setweatherIcon(light_thunder_night_icon);
        }
        break;
    case 'thunderstorm with heavy drizzle':
      if(dayTime){
        setweatherIcon(drizzle_day_icon);
        }else{
          setweatherIcon(drizzle_night_icon);
        }
        break;

    // Drizzle
    case 'light intensity drizzle':
      if(dayTime){
        setweatherIcon(drizzle_day_icon);
        }else{
          setweatherIcon(drizzle_night_icon);
        }
        break;
    case 'drizzle':
      if(dayTime){
        setweatherIcon(drizzle_day_icon);
        }else{
          setweatherIcon(drizzle_night_icon);
        }
        break;
    case 'heavy intensity drizzle':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'light intensity drizzle rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'drizzle rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'heavy intensity drizzle rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'shower rain and drizzle':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'heavy shower rain and drizzle':
      if(dayTime){
        setweatherIcon(heavy_rain_icon);
        }else{
          setweatherIcon(heavy_rain_icon);
        }
        break;
    case 'shower drizzle':
      if(dayTime){
        setweatherIcon(drizzle_day_icon);
        }else{
          setweatherIcon(drizzle_night_icon);
        }
        break;
    // Rain
    case 'light rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'moderate rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'heavy intensity rain':
      if(dayTime){
        setweatherIcon(heavy_rain_icon);
        }else{
          setweatherIcon(heavy_rain_icon);
        }
        break;
    case 'very heavy rain':
      if(dayTime){
        setweatherIcon(heavy_rain_icon);
        }else{
          setweatherIcon(heavy_rain_icon);
        }
        break;
    case 'extreme rain':
      if(dayTime){
        setweatherIcon(heavy_rain_icon);
        }else{
          setweatherIcon(heavy_rain_icon);
        }
        break;
    case 'freezing rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
        break;
    case 'fight intensity shower rain':
      
        setweatherIcon(heavy_rain_icon);
        
        break;
    case 'shower rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
      break;
    case 'heavy intensity shower rain':
      setweatherIcon(heavy_rain_icon);
      break;
    case 'ragged shower rain':
      if(dayTime){
        setweatherIcon(light_rain_day_icon);
        }else{
          setweatherIcon(light_rain_night_icon);
        }
      break;

    // Snow
    case 'light snow':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'snow':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'heavy snow':
      setweatherIcon(heavy_snow_icon);
      break;
    case 'sleet':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'light shower sleet':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'shower sleet':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'light rain and snow':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'rain and snow':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'light shower snow':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'shower snow':
      if(dayTime){
        setweatherIcon(light_snow_day_icon);
        }else{
          setweatherIcon(light_snow_night_icon);
        }
      break;
    case 'heavy shower snow':
      setweatherIcon(heavy_snow_icon);
      break;
    // Atmosphere
    case 'mist':
      if(dayTime){
        setweatherIcon(fog_day_icon);
        }else{
          setweatherIcon(fog_night_icon);
        }
      break;
    case 'smoke':
      if(dayTime){
        setweatherIcon(fog_day_icon);
        }else{
          setweatherIcon(fog_night_icon);
        }
      break;
    case 'haze':
      if(dayTime){
        setweatherIcon(fog_day_icon);
        }else{
          setweatherIcon(fog_night_icon);
        }
      break;
    case 'sand/dust whirls':
      if(dayTime){
        setweatherIcon(light_wind_day_icon);
        }else{
          setweatherIcon(light_wind_night_icon);
        }
      break;
    case 'fog':
      if(dayTime){
        setweatherIcon(fog_day_icon);
        }else{
          setweatherIcon(fog_night_icon);
        }
      break;
    case 'sand':
      setweatherIcon(heavy_fog_icon);
      break;
    case 'dust':
      setweatherIcon(heavy_fog_icon);
      break;
    case 'volcanic ash':
      setweatherIcon(heavy_fog_icon);
      break;
    case 'squalls':
      if(dayTime){
        setweatherIcon(fog_day_icon);
        }else{
          setweatherIcon(fog_night_icon);
        }
      break;
    case 'tornado':
      setweatherIcon(heavy_wind_icon);
      break;
      

    // Clear
    case 'clear sky':
      if(dayTime){
        setweatherIcon(clear_sky_day_icon);
        }else{
          setweatherIcon(clear_sky_night_icon);
        }
      break;

    // Clouds
    case 'few clouds':
      if(dayTime){
        setweatherIcon(cloudy_day_icon);
        }else{
          setweatherIcon(cloudy_night_icon);
        }
      break;
    case 'scattered clouds':
      if(dayTime){
        setweatherIcon(cloudy_day_icon);
        }else{
          setweatherIcon(cloudy_night_icon);
        }
      break;
    case 'broken clouds':
      if(dayTime){
        setweatherIcon(cloudy_day_icon);
        }else{
          setweatherIcon(cloudy_night_icon);
        }
      break;
    case 'overcast clouds':
      if(dayTime){
        setweatherIcon(cloudy_day_icon);
        }else{
          setweatherIcon(cloudy_night_icon);
        }
      break;

    
    // Default
    default:
      if(dayTime){
        setweatherIcon(cloudy_day_icon);
        }else{
          setweatherIcon(cloudy_night_icon);
        }
      break;
  }
  }
}, [weatherData]);


// Fetch weather data for the selected city

  const fetchWeather = async (selectedCity) => {
    try {
      const data = await getWeatherData(selectedCity);
      setSuggestedCities([]);
      console.log('Weather Data:', data);
      

      if (data.cod === '404') {
        Alert.alert('City not found', 'Please enter a valid city.');
        setWeatherData(null);
      } else {
        setWeatherData(data);
        
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      Alert.alert('Sorry!', 'Unable to find the city. Please try again.');
      setWeatherData(null);
    }
  };

  

  
  

// Fetch suggested cities for the search bar
const fetchCities = async (value) => {
  if (value === '') {
    setSuggestedCities([]); // Clear the suggested cities if the search bar is empty
  } else {
    try {
      // Use the Teleport API or another city-related API
      const response = await fetch(`https://api.teleport.org/api/cities/?search=${value}`);
      const data = await response.json();

      if (data._embedded && data._embedded['city:search-results']) {
        const results = data._embedded['city:search-results'].map((result) => {
          const city = result.matching_full_name.split(',')[0];
          const country = result.matching_full_name.split(',')[1]?.trim();
          return `${city}, ${country}`;
        });
        setSuggestedCities(results);
      } else {
        // Handle no results or API error
        setSuggestedCities([]);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  }
};


  // Render the suggested city

  const renderSuggestedCity = ({ item }) => (
    <TouchableOpacity onPress={() => { setCity(item); setSuggestedCities([]); fetchWeather(item); }}>
      <View style={styles.suggestedCityItem}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
// Render the App component
  return (
    // Use the background image as the background for the app
    <ImageBackground
      source={Background}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
     
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: windowHeight * 0.05,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <TextInput
            placeholder="Search any city..."
            value={city}
            onChangeText={(text) => {
              setCity(text);
              fetchCities(text);
      
            }}
            style={styles.input}
          />



        </View>

        {weatherData && (
          <View style={styles.cityInfo}>
            <Text style={styles.cityText}>{weatherData.name}, {weatherData.sys.country}</Text>
          </View>
        )}
        <View style={styles.weatherIcon}>
          <Image
            source={weatherIcon}
            style={styles.weatherIconImage}
          />
        </View>

        

        {weatherData && (
          <View style={styles.weatherState}>
            <Text style={styles.weatheStateText}>{weatherData.weather[0].description}</Text>
          </View>
        )}
        
        {weatherData && (
          <View style={styles.temperature}>
            <Text style={styles.temperatureText}>{temp_conversion(weatherData.main.temp)} &#xb0;C</Text>
          </View>
        )}
        {weatherData && (
          <View style={styles.date}>
            <Text style={styles.dateText}>{formatTimestamp(weatherData.dt)} &#xb0;C</Text>
          </View>
        )}

        <View style={{ flexDirection: 'row', alignItems: 'baseline',marginTop:windowWidth*0.025 }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: windowWidth*0.075,width:155 }}>
            <Image
              source={require('./AppComponents/images/humidity.png')}
              style={styles.weatherParameterIcon}
            />
            <View>
              {weatherData && (
                <View>
                  <Text style={styles.weatherParameterValue}>{weatherData.main.humidity}%</Text>
                </View>
              )}
              <View><Text style={styles.parameterNameText}>Humidity</Text></View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: windowWidth*0.075,width:155 }}>
            <Image
              source={require('./AppComponents/images/wind.png')}
              style={styles.weatherParameterIcon}
            />
            <View>
              {weatherData && (
                <View>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={styles.weatherParameterValue}>{weatherData.wind.speed}</Text>
                    <Text style={styles.weatherParameterunit}>m/s</Text>
                  </View>
                </View>
              )}
              <View><Text style={styles.parameterNameText}>Wind</Text></View>
            </View>
          </View>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' ,marginTop:windowWidth*0.025}}>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: windowWidth*0.075,width:155 }}>
            <Image
              source={require('./AppComponents/images/clock.png')}
              style={styles.weatherParameterIcon}
            />
            <View>
              {weatherData && (
                <View>
                  <Text style={styles.weatherParameterValue}>{formatTime(weatherData.time.hour)}:{formatTime(weatherData.time.minute)}</Text>
                </View>
              )}
              <View><Text style={styles.parameterNameText}>Time</Text></View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: windowWidth*0.075,width:155 }}>
            <Image
              source={require('./AppComponents/images/barometer.png')}
              style={styles.weatherParameterIcon}
            />
            <View>
              {weatherData && (
                <View>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={styles.weatherParameterValue}>{pressure_conversion(weatherData.main.pressure)}</Text>
                    <Text style={styles.weatherParameterunit}>atm</Text>
                  </View>
                </View>
              )}
              <View><Text style={styles.parameterNameText}>Pressure</Text></View>
            </View>
          </View>

        </View>
        <FlatList
          data={suggestedCities}
          renderItem={renderSuggestedCity}
          keyExtractor={(item) => item}
          style={styles.flatList}
        />
        
        

        
      </View>
    </ImageBackground>
  );
}

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month_name = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month_name} ${year}`;
};

const formatTime = (number) => {
  if(number<10)
  {
    return `0${number}`;
  }else{
    return `${number}`;
  }
};
const pressure_conversion = (pressure) => {
  return (pressure * 0.0009869233).toFixed(2);
};

const temp_conversion = (temp) => {
  return (temp - 273).toFixed(1);
};



