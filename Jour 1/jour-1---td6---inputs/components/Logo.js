import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Bureau() {
  return (
    <Image 
    style={styles.image}
    source={{
          uri: 'https://blog.savoirfairelinux.com/fr-ca/wp-content/uploads/2017/11/Python-Logo-PNG-Image.png',
        }} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "50vw",
    height: "50vw",
    borderRadius: "25vw",
    marginBottom: '10vh',
    padding: 0,
    resizeMode: "center",
  },
});