import React from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';

const Input = (placeholder) => {
  const [value, onChangeText] = React.useState('');

  const source_url = {
    uri : value.toLowerCase() === 'pomme' ? 'https://www.7detable.com/images/actualites/images/apple-cromata.png' : '',
  }

  return (
    <View>
      <TextInput
        style={styles.inputbox}
        placeholder  = 'Recherchez'
        onChangeText = {text => onChangeText(text)}
        value        = {value}
      />
      <Text style={styles.text }>Vous avez cherché : {value} </Text>
      <Image style = {styles.image} source = {source_url} />
    </View>
  );
};





export default Input;

const styles = StyleSheet.create({
  inputbox: {
    width: '80vw',
    height: '10vw',
    borderRadius: '5vw',
    margin: "2vw",
    backgroundColor: "#ffffff",
    borderColor: "lightgray",
    borderWidth: '1vw',
    alignSelf: "center",
    padding: '5vw',
  },
  text: {
    marginRight: '3vw',
    marginLeft: '3vw',
    fontSize: '2.5vh',
    fontWeight: 'bold',
    textAlign: 'center',
    color: "silver",
  },
  image: {
    width: "50vw",
    height: "50vw",
    borderRadius: "25vw",
    margin: '10vh',
    padding: 0,
    resizeMode: "center",
    alignSelf: "center",
  },
});