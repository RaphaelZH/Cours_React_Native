import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Restaurant from "../assets/restaurant.jpg";

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
});