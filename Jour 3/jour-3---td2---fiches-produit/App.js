import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Fiche from './components/fiche'
// or any pure javascript modules available in npm

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Fiche title = "Printemps" picture = "https://chine.in/images/2019/9dc4a98ae7d5a6e0b1956137a61c4fb8.jpg"/>
      <Fiche title = "Été" picture = "https://lh3.googleusercontent.com/proxy/1Mt5w0ebPS0f6rYf5muZSMYo1HRJfFUFAK5-0giLeoBf3fVoNmm7Vn4bH9IthGrVPBwvUmV1tfganlNPogUTivE"/>
      <Fiche title = "Automne" picture = "https://wzh.radiomandarin.fr/uploadfile/2019/0808/20190808081711744.jpg"/>
      <Fiche title = "Hiver" picture = "https://i.epochtimes.com/assets/uploads/2019/12/b025b2d1a5af6955e20898a96ca4b1a8-320x200.jpg"/>  
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
