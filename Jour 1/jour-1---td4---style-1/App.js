import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Bureau from './components/Bureau';
import Logo from './components/Logo';

export default function App() {
  return (
    <View style={[styles.container, {flex: 1, flexDirection: 'column'}]}>
    <ImageBackground source={Bureau} style={styles.background}>
    <View style={{
        flex: 1,
      }}>
    </View>
    <View style={{
        flex: 5,
        justifyContent: "center",
      }}>
      <Logo style={styles.logo}/>
      <Text style={styles.paragraph1}>
        Python is a programming language that lets you work quickly
and integrate systems more effectively.
      </Text>
      <TouchableOpacity style = {styles.button} onPress = {() => console.log ('Pressed')}>
        <Text style = {styles.paragraph2}>>>> Learn More</Text>
      </TouchableOpacity>
    </View>
    <View style={{
        flex: 2,
      }}>
    </View>
    <View style={{
        flex: 1,
        backgroundColor: "#EF4135",
      }}>
    </View>
    <View style={{
        flex: 1,
        backgroundColor:"#0055A4",
      }}>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100vh',
    resizeMode: "center",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph1: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f37021',
  },
  paragraph2: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#ffffff',
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  }
});//
