import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Fiche({title = "", description = "", picture = ""}) {
  return (
    <View style = {{flex : 1, flexDirection: "column"}}>
      <TouchableOpacity style = {styles.fiche} onPress = {() => console.log ('Pressed')}>
        <View style = {{flex : 4, overflow: "hidden"}}>
        <Image 
          style={styles.picture}
          source={{uri: picture}} />
        </View>
        <View style = {{flex : 2, overflow: "hidden"}}>
          <Text style = {styles.title}>{title}</Text>
          <Text style = {styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fiche: {
    width: '80vw',
    height: '80vw',
    borderRadius: '5vw',
    margin: "2vw",
    overflow: "hidden",
    resizeMode: "contain",
    justifyContent: 'flex-start',
    backgroundColor: "#ffffff",
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
  description: {
    alignSelf: "flex-start",
    marginLeft: '5vw',
    marginRight: '5vw',
    fontSize: '3.5vw',
    fontWeight: 'bold',
    textAlign: "left",
    color: "steelblue",
  },
  picture: {
    width: '100%',
    height: "100%",
    justifyContent: 'flex-start',
    resizeMode: "cover",
  },
});