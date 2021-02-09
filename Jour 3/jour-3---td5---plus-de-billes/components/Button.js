import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, } from 'react-native';

export default function Button({onPress, title}) {

  return (
    <View>
      <TouchableOpacity style = {styles.button} onPress = {onPress}>
        <Text style = {styles.text}>{title}</Text>
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
    margin: '5vw',
    alignSelf: 'center'},
  text: {
    color: "#FFFFFF",
    margin: '4vh',
    fontSize: '4vh',
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
}