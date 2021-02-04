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
    width: '40vw',
    height: '40vw',
    borderRadius: '20wv'
  },
});
