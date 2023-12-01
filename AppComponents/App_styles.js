import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = {
  input: {
    height: windowHeight * 0.07,
    width: windowWidth * 0.85,
    marginBottom: 10,
    padding: 5,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  
 
  weatherIconImage: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
  },
  suggestedCityItem: {
    padding: windowWidth * 0.02,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
 
  weatherInfo: {
    marginTop: 20,
  },
  dateStyles: {
    marginTop: 10,
    alignItems: 'center', // Center the date horizontally
  },
  dateText: {
    color: 'white',
    fontSize: 18,
  },
  flatList: {
    
    position: 'absolute', // Ensure the flat list appears above other components
    top: 120, // Adjust the top value as needed to control the vertical spacing
    width: '100%',
    backgroundColor: 'white',
  },
  weatherIcon: {
    backgroundColor: 'transparent',
    marginTop: 1, // Add some margin if needed
  },

  weatherIconImage: {
    width: 220,
    height: 220,
  },
  cityInfo: {
    marginTop: 20,
  },
  cityText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  weatherState: {},
  weatheStateText: {
    color: 'white',
    fontSize: 22,
    textTransform: 'capitalize',
  },
  temperatureText: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 18,
  },
  weatherParameterIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  weatherParameterValue: {
    color: 'white',
    fontSize: 29,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  parameterNameText: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 5,
    paddingBottom: 8,
  },
  weatherParameterunit: {
    color: 'white',
    fontSize: 18,
  },
};
