import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Chair from './components/Chair';


export default function App() {
  return (
    <View style={[styles.container, {flex: 1, flexDirection: 'column', backgroundColor: "#000000"}]}>
      <View style={{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: "space-between"
      }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#EF4135"}]} onPress = {() => console.log ('Pressed')}>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#0055A4"}]} onPress = {() => console.log ('Pressed')}>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 6,
      }}>
        <Image source={Chair} style={styles.image}/>
      </View>
      <View style={{
        flex: 1,
      }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '80vh',
    resizeMode: "contain",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    height: '20vw',
    width: '20vw',
    borderRadius: '5vw',
    backgroundColor: "#FFFFFF",
    margin: '5vw'},
});//
