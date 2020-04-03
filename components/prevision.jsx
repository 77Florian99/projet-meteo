import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Jour from './Jour';
import {Location, Permissions} from 'expo-location';

export default function prevision({navigation}) {

  //-------------------Tentative code Géolocalisation-----------//

  // state = {
  //   location: {},
  //   errorMessage: ''
  // };
  // function componentWillMount() {
  //   this._getLocation();
  // }

  // _getLocation = async() => {
  //   const {status} = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     console.log('Permission non autorisé ! ');
  //     this.setState({errorMessage: 'Permission'});

  //   }
  //   const location = await Location.getCurrentPositionAsync();

  //   this.setState({location});

  //   console.log(JSON.stringify(this.location))

  

  const apiKey = 'b547f3cf0f5c8ed37ecd6abd456fb7b0';

  const ville = 'Chanteloup en Brie';

  const [meteo,setMeteo] = useState('');


//------------APPELLE DEUXIEME API----------------------//


  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Chanteloup-en-Brie&appid=adbb3ec5f92d77607ff77f1946193b0f&lang=fr&units=metric`)
      .then(response => response.json())
      .then(meteo => {
        setMeteo(meteo);
      })
  });
//-------------------Front-end-------------------------//
  return (
    <ScrollView style={styles.container}>
      <LinearGradient style={styles.gradiant} colors={['#1fddff', '#ff4b1f']}>

        <Text style={styles.titre}>Prévision sur 5 jours
        </Text>
        <View style={styles.containerInfo}>
          <FlatList
            data={meteo.list}
            renderItem={({item}) => {
            return (<Jour item={item}/>)
          }}
            keyExtractor={item => item.dt}/>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

//-------------------Style Prevision-------------------//


const styles = StyleSheet.create({
  gradiant: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  containerInfo: {
    flex: 1,
    marginTop: 30,
    // justifyContent: 'space-around',
  },

  titre: {

    padding: 0,
    color: 'white',
    fontSize: 32,
    marginTop: 60
  }
});
