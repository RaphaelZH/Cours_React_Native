import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Bille from './components/Bille'
import Button from './components/Button'

// or any pure javascript modules available in npm

export default function App() {
  const [number, setNumber] = React.useState(4);
  const billeInfo = [
    { billeColor: 'orangered', numberOfBille: 1 }, 
    { billeColor: 'orange',    numberOfBille: 2 }, 
    { billeColor: 'gold',      numberOfBille: 3 }
  ];
  const [table, setTable] = React.useState(billeInfo);

  const addBille = () => {

    const newTab = [...table];
    setNumber(number + 1);
    newTab.push({billeColor: 'yellow', numberOfBille: number });
    setTable(newTab);
    console.log(number, table.billeColor);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Affichez moi plus de billes !
      </Text>
      <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>
      {table.map(element => <Bille color={element.billeColor} nb={element.numberOfBille}/> ) }
      </ View>
      <Button title = 'ADD' onPress = {addBille}/>
    </View>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
