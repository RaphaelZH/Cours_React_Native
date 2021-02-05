import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import Icon from './components/Icon'


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style = {{flexGrow: 0, backgroundColor: "beige"}} horizontal = {true}>
      <Icon
        url_color   = {require('./assets/Color/camera.png')}
        url_outline = {require('./assets/Outline/camera.png')}
        title       = 'Camera'/>
      <Icon
        url_color   = {require('./assets/Color/clock.png')}
        url_outline = {require('./assets/Outline/clock.png')}
        title       = 'Clock'
       />
      <Icon
        url_color   = {require('./assets/Color/image.png')}
        url_outline = {require('./assets/Outline/image.png')}
        title       = 'Image'
       />
       <Icon
        url_color   = {require('./assets/Color/mail.png')}
        url_outline = {require('./assets/Outline/mail.png')}
        title       = 'Mail'/>
      <Icon
        url_color   = {require('./assets/Color/maps.png')}
        url_outline = {require('./assets/Outline/maps.png')}
        title       = 'Maps'
       />
      <Icon
        url_color   = {require('./assets/Color/notes.png')}
        url_outline = {require('./assets/Outline/notes.png')}
        title       = 'Notes'
       />
       <Icon
        url_color   = {require('./assets/Color/speech.png')}
        url_outline = {require('./assets/Outline/speech.png')}
        title       = 'Speech'/>
      <Icon
        url_color   = {require('./assets/Color/telephone.png')}
        url_outline = {require('./assets/Outline/telephone.png')}
        title       = 'Telephone'
       />
      <Icon
        url_color   = {require('./assets/Color/tv.png')}
        url_outline = {require('./assets/Outline/tv.png')}
        title       = 'TV'
       />
      <Icon
        url_color   = {require('./assets/Color/weather.png')}
        url_outline = {require('./assets/Outline/weather.png')}
        title       = 'Weather'/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

