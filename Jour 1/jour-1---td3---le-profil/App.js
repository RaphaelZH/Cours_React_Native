import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import CarreRouge from "./components/CarreRouge";
import ProfileImage from'./components/ProfileImage';
import RectangleBleu from'./components/RectangleBleu';

// or any pure javascript modules available in npm

export default function App() {
  return (
    <View style={[styles.container, {flex: 1}]}>
    <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
      <CarreRouge />
    </View>
    <View style={{
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <ProfileImage/>
      <Text style={styles.paragraph}>
          Hao ZHANG
        </Text>
    </View>
    <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
      }}>
     <RectangleBleu />
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  paragraph: {
    color: "#0ABAB5",
    margin: '-10vh',
    fontSize: '5vh',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

//
