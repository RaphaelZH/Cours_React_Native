import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Bloc() {
  return (
    <ScrollView style={styles.container}>
      <Image style = {styles.carre}/>
      <Image style = {styles.carre}/>
      <Image style = {styles.carre}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#000000",
    borderWidth: '0.5vw',
    width: '80vw',
    height: '60vw',
    marginTop: '20vw',
    borderRadius: '10vw',
    padding: 0,
    alignItems: "center",
  },
  carre: {
    width: "20vw",
    height: "20vw",
    borderRadius: "5vw",
    margin: '2vw',
    padding: 0,
    backgroundColor: "#f37021",
  }
});