import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import RoundImage from "./components/RoundImage";
import RestaurantImage from "./components/RestaurantImage";

export default function App() {
  return (
    <View style={styles.container}>
      <RoundImage />
      <RestaurantImage />
      <Text style={styles.paragraph}>
        Restaurant Fondue Chinoise
      </Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  paragraph: {
    color: "#0ABAB5",
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});