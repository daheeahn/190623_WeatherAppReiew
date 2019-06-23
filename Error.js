import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

function Error() {
    return (
      <LinearGradient 
        style={styles.container}
        colors={['#be99ff', '#fc4bd9']}>
          <Text style={styles.text}>
              {this.props.weatherName} 날씨의 화면은 준비중입니다!
          </Text>
      </LinearGradient>
    );
}

export default Error;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontSize: 50
    }
});