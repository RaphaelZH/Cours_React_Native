import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

import BlocRouge from "./components/BlocRouge";
import RondBleu from "./components/RondBleu";

export default function App() {
  const RondBleu10 = new Array(10).fill();
  return (
    <ScrollView>
      <View style={styles.container}>
        <BlocRouge />
        {RondBleu10.map(element => <RondBleu />)}
        <Text style={styles.paragraph}>
          Fin du chemin !
        </Text>
      </View>
    </ScrollView>
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