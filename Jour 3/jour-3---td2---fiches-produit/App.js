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
      <Fiche title = "Été" picture = "http://5b0988e595225.cdn.sohucs.com/images/20180504/8ab8f8e72af94e1dbf06537414b1f2fe.jpeg"/>
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
