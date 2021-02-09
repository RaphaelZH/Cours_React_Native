import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Bille({color = "#0ABAB5", nb = 0}) {

  const billeStyle = {
    backgroundColor: color,
 }

  return (
    <View style={[styles.bille, billeStyle]}>
    <Text style = {styles.text}>{nb}</ Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bille: {
    width: '20vw',
    height: '20vw',
    margin: '5vw',
    borderRadius: '10vw',
    padding: 0,
  },
  text: {
    color: "silver",
    fontSize: '5vh',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    left : '7vw',
    top: '5vw'
  },
});