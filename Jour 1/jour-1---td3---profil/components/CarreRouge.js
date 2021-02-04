import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CarreRouge() {
  return (
    <View>
      <TouchableOpacity style = {styles.button} onPress = {() => console.log ('Pressed')}>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  button: {
    height: '20vw',
    width: '20vw',
    borderRadius: '5vw',
    backgroundColor: "#EF4135",
    margin: '5vw',
  }
}