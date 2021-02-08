import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import useCounter from './components/hook'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset     = () => setCount(0);
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style = {styles.rond}>
          <Text style = {styles.count}>{count}</Text>
        </View>
        <Text style = {styles.count}>Le compte est bon !</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <TouchableOpacity style = {styles.button} onPress={increment}><Text style = {styles.buttonfont}>Augmenter</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress={decrement}><Text style = {styles.buttonfont}>Diminuer</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress={reset}><Text style = {styles.buttonfont}>Reset</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    height: '20vw',
    width: '60vw',
    borderRadius: '5vw',
    backgroundColor: "#0055A4",
    margin: '5vw',
    alignSelf: 'center',
    },
  buttonfont: {
    color: "#FFFFFF",
    margin: '4vh',
    fontSize: '4vh',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  count: {
    color: "#0ABAB5",
    margin: '4vh',
    fontSize: '4vh',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rond: {
    backgroundColor: "#ffffff",
    width: '20vw',
    height: '20vw',
    margin: '3vw',
    borderRadius: '10vw',
    padding: 0,
    alignSelf: 'center',
  },
});
