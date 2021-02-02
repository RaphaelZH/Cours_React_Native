import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CarreRouge() {
  return (
    <View style={styles.circle}>
    </View>
  );
}

const styles = {
  circle: {
    height: '20vw',
    width: '20vw',
    borderRadius: '5vw',
    backgroundColor: "#EF4135",
    margin: '5vw',
  }
}