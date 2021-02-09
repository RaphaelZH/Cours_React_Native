import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Fiche({isSelected, title = "", picture = "", onPressFiche}) {
   const selectedStyle = {
    borderColor: isSelected ? 'lightskyblue' : 'lightgray'
  }

  return (
    <TouchableOpacity style={[styles.fiche, selectedStyle]} onPress={onPressFiche}>
      <Image 
          style={styles.picture}
          source={{uri: picture}} />
      <Text style = {styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fiche: {
    width: '80vw',
    height: '60vw',
    borderRadius: '5vw',
    margin: "2vw",
    overflow: "hidden",
    resizeMode: "contain",
    justifyContent: 'flex-start',
    backgroundColor: "#ffffff",
    borderWidth: '1vw',
    alignSelf: "center",

  },
  title:{
    marginRight: '5vw',
    marginLeft: '5vw',
    marginBottom: '1.5vh',
    marginTop: '1.5vh',
    fontSize: '3vh',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picture: {
    width: 'auto',
    height: "100%",
    justifyContent: 'flex-start',
    resizeMode: "cover",
  },
});