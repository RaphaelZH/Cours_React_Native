import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Bille from './components/Bille'
import Button from './components/Button'

// or any pure javascript modules available in npm

export default function App() {
  const [number, setNumber] = React.useState(1);
  const [billes, setBilles] = React.useState([
    { billeColor: 'orangered', numberOfBille: 1 }, 
    { billeColor: 'orange',    numberOfBille: 2 }, 
    { billeColor: 'gold',      numberOfBille: 3 }
  ]
  );

  const increment = () => {
    const newBilles = [...billes];
    newBilles.push(
      {
        billeColor: billes[number - 1].billeColor,
        numberOfBille: number + 3
      }
      );
    setNumber(number + 1);
    setBilles(newBilles)
  }

  const decrement = () => {
    const newBilles = [...billes];
    newBilles.pop()
    setNumber(number - 1);
    setBilles(newBilles)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Affichez moi plus de billes !
      </Text>
      <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>
      {billes.map(element => <Bille color={element.billeColor} nb={element.numberOfBille}/> ) }
      </ View>
      <Button title = 'Incrément' onPress = {increment}/>
      <Button title = 'Décrément' onPress = {decrement}/>
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
