import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Restaurant from "../restaurant.jpg";

export default function RestaurantImage() {
  return (
    <Image 
    style={styles.image}
    source={Restaurant} />
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 5,
    width: 400,
    height: 200,
    borderRadius: 5
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});