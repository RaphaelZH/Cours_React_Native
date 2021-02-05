import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';



export default function Icon ({isSelected, url_color = "", url_outline = "", title}) {
  if (isSelected) {
    return (
    <View style = {{flex: 1, flexDirection: "column"}}>
      <View style = {[styles.contain, {backgroundColor: 'mintcream'}]}>
        <Image style = {styles.icon}
          source = {url_color} />
      </View>
      <View style = {{width: '30vw'}}>
        <Text style = {[styles.title, {color: "steelblue"}]}>{title}</Text>
      </View>
    </View>
    );
  }
  return (
    <View style = {{flex: 1, flexDirection: "column"}}>
      <View style = {[styles.contain]}>
        <Image style = {styles.icon}
          source = {url_outline} />
      </View>
      <View style = {{width: '30vw'}}>
        <Text style = {[styles.title]}>{title}</Text>
      </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  contain: {
    width: '30vw',
    height: '30vw',
    borderRadius: '3vw',
    overflow: "hidden",
    resizeMode: "contain",
    justifyContent: 'flex-start',
    backgroundColor: 'lightgray',
  },
  title:{
    marginRight: '3vw',
    marginLeft: '3vw',
    fontSize: '3vh',
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