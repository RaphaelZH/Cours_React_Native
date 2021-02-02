import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function RectangleBleu() {
  return (
    <View style={styles.circle}>
      <Text style={styles.paragraph}>Commencer
      </Text>
    </View>
  );
}

const styles = {
  circle: {
    height: '20vw',
    width: '60vw',
    borderRadius: '5vw',
    backgroundColor: "#0055A4",
    margin: '5vw'},
  paragraph: {
    color: "#FFFFFF",
    margin: '4vh',
    fontSize: '4vh',
    fontWeight: 'bold',
    textAlign: 'center',
  }
}