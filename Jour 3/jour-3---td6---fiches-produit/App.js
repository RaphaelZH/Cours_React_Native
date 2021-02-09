import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Fiche from './components/Fiche'
// or any pure javascript modules available in npm

export default function App() {

  const initialFiche = [
    { isSelected: true, titleOfFiche: "Printemps", pictureURL:"https://chine.in/images/2019/9dc4a98ae7d5a6e0b1956137a61c4fb8.jpg", position: 1}, 
    { isSelected: false, titleOfFiche: "Été",       pictureURL:"http://5b0988e595225.cdn.sohucs.com/images/20180504/8ab8f8e72af94e1dbf06537414b1f2fe.jpeg", position: 2},
    { isSelected: false, titleOfFiche: "Automne",   pictureURL:"https://wzh.radiomandarin.fr/uploadfile/2019/0808/20190808081711744.jpg", position: 3},
    { isSelected: false, titleOfFiche: "Hiver",     pictureURL:"https://i.epochtimes.com/assets/uploads/2019/12/b025b2d1a5af6955e20898a96ca4b1a8-320x200.jpg", position: 4},
  ];
  const [table, setTable] = React.useState(initialFiche);

  const [selectedNumber, setSelectedNumber] = React.useState(0);

  const onPressFiche = (fiche) => () => {
    console.log(fiche)
    setSelectedNumber(fiche.position);
  }  

  return (
    <ScrollView style={styles.container}>
      {table.map(element => <Fiche 
      title ={element.titleOfFiche} 
      picture= {element.pictureURL} 
      onPressFiche={onPressFiche(element)} 
      isSelected = {selectedNumber === element.position} /> ) } 
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
