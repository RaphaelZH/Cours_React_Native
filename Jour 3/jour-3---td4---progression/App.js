import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import ProfileImage from'./components/ProfileImage';
import RectangleBleu from'./components/RectangleBleu';
import Barre from './components/Barre';

// or any pure javascript modules available in npm

export default function App() {
  const [number, setNumber]         = React.useState(0);
  const [barrewidth, setBarrewidth] = React.useState(0);

  const progresse = () => {
    setNumber(number + 5);
    if (number < 100) {
      setBarrewidth((number / 100 * 50) + 'vw');
      console.log(number, barrewidth);
    } else
    {
      setBarrewidth('50vw');
      console.log(number, barrewidth);
    }
  }

  const reset = () => {
    setNumber    (0);
    setBarrewidth(0);
  }

  return (
    <View style={[styles.container, {flex: 1}]}>
    <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
    </View>
    <View style={{
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <ProfileImage/>
      <Text style={styles.paragraph}>
          Hao ZHANG
        </Text>
      <Barre barwidth = {barrewidth}/>
    </View>
    <View style={{
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center'
      }}>
     <RectangleBleu title = 'Progesser !' onPress = {progresse}/>
     <RectangleBleu title = 'RESET'onPress = {reset}/>
    </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  paragraph: {
    color: "#0ABAB5",
    margin: '-10vh',
    fontSize: '5vh',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

