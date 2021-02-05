import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';


export default function Icon ({url_color = "", url_outline = "", title}) {

  const [isSelected, setSelected] = React.useState(false);

  const onPressButton = () => {
    console.log ('Pressed')
    setSelected(!isSelected);
  }

  if (isSelected) {
    return (
    <TouchableWithoutFeedback onPress = {onPressButton}>
    <View style = {{flexDirection: "column", padding: '5vw'}}>
      <View style = {[styles.contain, {backgroundColor: 'mintcream'}]}>
        <Image style = {styles.icon}
          source = {url_color} />
      </View>
      <View style = {{width: '30vw'}}>
        <Text style = {[styles.title, {color: "steelblue"}]}>{title}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
    );
  }
  return (
    <TouchableWithoutFeedback onPress = {onPressButton}>
    <View style = {{flexDirection: "column", padding: '5vw'}}>
      <View style = {[styles.contain, {}]}>
        <Image style = {styles.icon}
          source = {url_outline} />
      </View>
      <View style = {{width: '30vw'}}>
        <Text style = {[styles.title, {}]}>{title}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
    );
  }

const styles = StyleSheet.create({
  contain: {
    width: '30vw',
    height: '30vw',
    borderRadius: '7vw',
    overflow: "hidden",
    resizeMode: "contain",
    justifyContent: 'flex-start',
    backgroundColor: 'lightgray',
  },
  title:{
    marginRight: '3vw',
    marginLeft: '3vw',
    fontSize: '2.5vh',
    fontWeight: 'bold',
    textAlign: 'center',
    color: "silver",
  },
  icon: {
    width: 'auto',
    height: "100%",
    justifyContent: 'flex-start',
    resizeMode: "contain",
  },
});