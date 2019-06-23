import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Thunderstorm: {
        colors: ['#415b72', '#004787'],
        icon: 'weather-lightning',
        weatherName: 'Thunderstorm',
        desc: '오늘은 천둥 번개가 쳐요'    
    },

    Drizzle: {
        colors: ['#d7dde5', '#c9d2d8', '#5db7fc'],
        icon: 'weather-rainy',
        weatherName: 'Drizzle',
        desc: '오늘은 이슬비가 내려요'
    },

    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        icon: 'weather-pouring',
        weatherName: 'Rain',
        desc: '오늘은 비가 내려요. 우산을 꼭 챙기세요!'
    },

    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        icon: 'weather-snowy',
        weatherName: 'Snow',
        desc: '오늘은 눈이 내려요.'
    },

    Clear: {
        colors: ['#ffffff', '#6de1ff'],
        icon: 'weather-sunny',
        weatherName: 'Clear',
        desc: '오늘은 맑아요'
    },

    Clouds: {
        colors: ['#d7dde5', '#646970'],
        icon: 'weather-cloudy',
        weatherName: 'Clouds',
        desc: '오늘은 흐려요'
    }

}

function Weather({ city, weatherName, temp }) {

    // weatherName에 아직 등록하지 않은 이름이 들어오면 -> redux 개념 필요?
    // var i = 0;
    // while (i < weatherCases.length) {
    //     if (weatherName === weatherCases[i].weatherName) {
    //         break;
    //     }
    //     i = i + 1;
    // }

    // if (i === weatherCases.length) {
    //     return (
    //         <View>
    //             <Error weatherName={weatherName} />
    //         </View>
    //     );
    // }

    return (
      <LinearGradient 
        style={styles.container}
        colors={weatherCases[weatherName].colors}>
          <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={120} name={weatherCases[weatherName].icon} />
            <Text style={styles.temp}> {temp}°</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.city}> 
                {city} 
            </Text>
            <Text style={styles.weatherName}>
                {weatherName}
            </Text>
            <Text style={styles.desc}>
                {weatherCases[weatherName].desc}
            </Text>
          </View>
      </LinearGradient>
    );
}

Weather.propTypes = {
    city: PropTypes.string.isRequired,
    weatherName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    
    upper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    temp: {
        color: 'white',
        fontSize: 50,
        fontWeight: '100'
    },

    lower: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },

    city: {
        color: 'white',
        fontSize: 25,
        fontWeight: '100'
    },

    weatherName: {
        color: 'white',
        marginTop: 10,
        fontSize: 40
    },

    desc: {
        color: 'white',
        marginTop: 10,
        fontSize: 20
    }
});