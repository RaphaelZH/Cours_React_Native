import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Bille() {
  return (
    <View style={styles.image}>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: "#0ABAB5",
    width: '20vw',
    height: '20vw',
    margin: '5vw',
    borderRadius: '10vw',
    padding: 0,
  },
});