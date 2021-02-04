import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Bille from './components/Bille';
import Bloc from './components/Bloc';

// or any pure javascript modules available in npm

export default function App() {
  const Billes6 = new Array(6).fill();
  return (
    <View style={[styles.container]}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'}}>
        {Billes6.map(element => <Bille />)}
      </View>
      <View style={{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Bloc />
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <TouchableOpacity style = {styles.button} onPress = {() => console.log ('Pressed')}>
          <Text style = {styles.text}> Se connecter </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: '20vw',
    width: '60vw',
    borderRadius: '5vw',
    backgroundColor: "#0055A4",
    margin: '5vw'},
  text: {
    color: "#FFFFFF",
    margin: '4vh',
    fontSize: '4vh',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

//
