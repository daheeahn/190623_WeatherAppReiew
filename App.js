import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather2";

const API_KEY = "b86c474546c60f7c146da98180738950";

export default class App extends Component {
  state = {
    isLoaded: false,
    city: null,
    weatherName: null,
    cityTemp: null

  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      }
    );
  }

  _getWeather = (lat, lon) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {

        this.setState({
          isLoaded: true,
          city: json.name,
          weatherName: json.weather[0].main,
          // weatherName: 'Clear',
          // weatherName: 'Snow',
          cityTemp: json.main.temp
        })
        
      });
  }

  render() {
    const { isLoaded, city, weatherName, cityTemp } = this.state;

    return (
      isLoaded 
      ? 
        <Weather 
          city={city} 
          weatherName={weatherName} 
          temp={Math.floor(cityTemp - 273.15)} /> 
      :
        <View style={styles.container}>
          <StatusBar hidden={true} barStyle="dark-content" />
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Today's Weather</Text>
            <Text style={styles.loadingSubText}>오늘의 날씨를 알려드릴게요</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfc6ff'
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginBottom: 80
  },

  loadingText: {
    color: 'white',
    fontSize: 40
  },

  loadingSubText: {
    color: 'white',
    marginTop: 15,
    fontSize: 20
  }
});
