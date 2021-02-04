import * as React from 'react';
import { Text, View, StyleSheet, ScrollView,} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Fiche from './components/Fiche'
import ProfileImage from './components/ProfileImage'
import moment from 'moment';

var date = moment().locale('fr').format('LL');

export default function App() {
  return (
    <ScrollView  style={styles.container}>
      <View style= {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "2vw"}}>
      <Text style={styles.paragraph}>le {date}</Text>
      <ProfileImage/>
      </View>
      <Fiche title = "Super Mario Bros" description= "Les 35 ans de Super Mario Bros. ne sont pas terminés, retrouvez ici nos nouvelles annonces !" picture = "https://cdn03.nintendo-europe.com/media/images/10_share_images/news_9/2021_1/january_13/H2x1_NSwitch_MarioNSwitchHardware_image950w.jpg"/>
      <Fiche title = "Monster Hunter Rise" description= "Maîtrisez la démo de Monster Hunter Rise avec notre guide !" picture = "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MonsterHunterRise_Demo_FR_image500w.jpg"/>
      <Fiche title = "Animal Crossing" description= "Règlement Jeu « Concours Jennyfer x Animal Crossing – Instagram @NintendoFR»" picture = "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image500w.jpg"/>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: "center",
  },
  paragraph: {
    fontSize: '4vh',
    fontWeight: 'bold',
    textAlign: 'center',
    color: "teal",
  },
});
