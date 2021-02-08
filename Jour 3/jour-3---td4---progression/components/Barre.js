import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function Barre({barwidth = '0vw'}) {
  
  const barreStyle = {
    width : barwidth,
  }

  return (
    <View>
    <View style = {styles.barre_0}></ View> 
    <View style = {[styles.barre, barreStyle]}></ View>
    </View>
  );
}

const styles = StyleSheet.create({
  barre_0: {
    height: '5vw',
    width: '50vw',
    marginTop: '15vh',
    borderRadius: '5vw',
    backgroundColor: '#FFFFFF',
    margin: '5vw',
    borderColor: "lightgray",
    borderWidth: '1vw',
    alignSelf: 'left',
  },
  barre: {
    position: 'absolute',
    height: '5vw',
    marginTop: '15vh',
    borderRadius: '5vw',
    backgroundColor: '#0ABAB5',
    margin: '5vw',
    borderColor: "lightgray",
    borderWidth: '1vw',
    alignSelf: 'left',
  },
});