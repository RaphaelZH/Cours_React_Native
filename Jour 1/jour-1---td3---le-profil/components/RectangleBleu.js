import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RectangleBleu() {
  return (
    <View>
      <TouchableOpacity style = {styles.button} onPress = {() => console.log ('Pressed')}>
        <Text style = {styles.text}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  button: {
    height: '20vw',
    width: '60vw',
    borderRadius: '5vw',
    backgroundColor: "#0055A4",
    margin: '5vw'},
  text: {
    color: "#FFFFFF",
    margin: '4vh',
    fontSize: '4vh',
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
}