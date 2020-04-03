import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import home from './components/home';
import prevision from './components/prevision';

//-------------- Navigation entre plusieurs page ---------//



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="float" >
      <Stack.Screen
               name="Accueil"
               component={home}
               options={{
                title:"",
                  headerStyle: navHeaderStyle,
               }}
            />
      
        <Stack.Screen 
              name="prevision" component={prevision}
              options={{
                title:"",
              headerStyle: navHeaderStyle,
           
          }}

        />
      </Stack.Navigator>
    
    </NavigationContainer>
  );


  //------------ Supression de la navbar -----------------//
}
const navHeaderStyle = {
  borderWidth: 0,
  shadowColor: 'transparent',
  height: 0,
}


  
