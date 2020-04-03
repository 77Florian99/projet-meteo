import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import {useState, useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient';

export default function home({navigation}) {


  //---------------------UseState-----------------------//


  const [city,setCity] = useState('');
  const [desc,setDesc] = useState('');
  const [temp,setTemp] = useState('');
  const [ico,setIcon] = useState('');
  const [heures, setHeures] = useState('');
  const [minutes, setMinutes] = useState('');


 //--Const pour afficher la date écrite et non numérique-//

  let date = new Date();
  
  const week = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];
  let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;



  //-----------Appelle de la deuxième API--------------//




  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=adbb3ec5f92d77607ff77f1946193b0f&&lang=fr&units=metric`)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setCity(res.name)
        setDesc(res.weather[0].description)
        setTemp(res.main.temp)
        setIcon(res.weather[0].icon)

        setInterval(function heure(){
          let h = new Date().getHours();
          h = (h < 10) ? `0${h}` : h;
          setHeures(h);
      }, 600);
      setInterval(function minutes(){
          let min = new Date().getUTCMinutes();
          min = (min < 10) ? `0${min}` : min;
          setMinutes(min);
      }, 100);
      })
  });


   //-----------Appelle de la Première API--------------//



  return (

    <LinearGradient
      colors={['#16d9e3', '#30c7ec', '#46aef7']}
      style={styles.container}>
      <Text style={styles.date}>{city}, {heures}h{minutes}</Text>
      <Image
        style={{
        width: 250,
        height: 200,
        marginTop: 150,
        marginBottom:30,
    
        borderRadius: 20
      }}
        source={{
        uri: `http://openweathermap.org/img/wn/${ico}@2x.png`
      }}/>
      <Text style={styles.welcome}>{desc}</Text>
      <Text style={styles.temperature}>{temp}°C</Text>
      <Text style={styles.fulldate}>{fullDate}</Text>

      <Text style={styles.boutton} onPress={() => navigation.navigate('prevision')}>&rarr;</Text>

    </LinearGradient>

  );

}

//-------------------Style Première-----------------------//

const styles = StyleSheet.create({
  welcome: {
    color: "white",
    fontSize: 30,
    marginBottom:10,
    marginTop:40,
    
  },
  fulldate: {
    color: "white",
    fontSize: 20,
    marginBottom:10
  },

  date: {
    position: "absolute",
    color: "white",
    fontSize: 32,
    top: 100,
  },

  previ: {
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    marginLeft: 50
  },

  box: {
    marginRight: 50
  },

  container: {
    flex: 1,
    // backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },

  temperature: {
    color: "white",
    fontSize: 53,
    marginBottom: 20
  },

  boutton: {
    padding: 0,
    color: 'white',
    fontSize: 80
  }
});
