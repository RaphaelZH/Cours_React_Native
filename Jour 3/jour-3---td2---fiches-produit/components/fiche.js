import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Fiche({title = "", description = "", picture = ""}) {
  const [isSelected, setSelected] = React.useState(false);

  const onPressButton = () => {
    console.log ('Pressed')
    setSelected(!isSelected);
  }

  if (isSelected) {
    return (
    <View style = {{flex : 1, flexDirection: "column"}}>
      <TouchableOpacity style = {styles.fiche} onPress = {onPressButton}>
        <View style = {{flex : 5, overflow: "hidden"}}>
        <Image 
          style={styles.picture}
          source={{uri: picture}} />
        </View>
        <View style = {{flex : 1, overflow: "hidden"}}>
          <Text style = {styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
    );
    } else
  {
    return (

    <View style = {{flex : 1, flexDirection: "column"}}>
      <TouchableOpacity style = {[styles.fiche, {borderColor: "lightskyblue"}]} onPress = {onPressButton}>
        <View style = {{flex : 5, overflow: "hidden"}}>
        <Image 
          style={styles.picture}
          source={{uri: picture}} />
        </View>
        <View style = {{flex : 1, overflow: "hidden"}}>
          <Text style = {styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
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
    borderColor: "lightgray",
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