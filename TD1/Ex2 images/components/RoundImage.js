import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function RoundImage() {
  return (
    <Image 
    style={styles.image}
    source={{
          uri: 'https://avatars.githubusercontent.com/u/32324353?s=400&u=9018b1ce1241fd1380278c5eca63c4bc990f9e81&v=4',
        }} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
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
