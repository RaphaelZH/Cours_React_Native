import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Logo from './components/Logo';
import UselessTextInput from './components/UselessTextInput';

// or any pure javascript modules available in npm

export default function App() {
  return (
    <View style={[styles.container]}>
      <View style={{
        flex: 2,
        alignItems: 'center'}}>
        <Logo />
      </View>
      <View style={{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around'}}>
        <UselessTextInput placeholder = 'Email'/>
        <UselessTextInput placeholder = 'Mot de passe'/>
      </View>
      <View style={{
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <Button
          title="Se connecter"
          onPress={() => Alert.alert('Simple Button pressed')}
          color = "#0055A4"
        />
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#FFFFFF',
  },
});

//
