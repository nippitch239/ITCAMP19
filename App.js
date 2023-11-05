import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StartScreen} from './Pages/StartScreen';
import {GameScreen} from './Pages/GameScreen';
import { AdminScreen } from './Pages/AdminScreen';
import { DeviceEventEmitter } from "react-native";
import { ScoreUploadScreen } from "./Pages/ScoreUploadScreen";

import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import {Button} from  'react-native-paper';
import { useTheme } from 'react-native-paper';
const Stack = createNativeStackNavigator();
export const scoreContext = React.createContext(
  0 
);
export default function App() {
  const theme = useTheme();
  let [currentScore, setCurrentScore] = React.useState(0);
  function setScore(score) {
    setCurrentScore(score);
  }

  DeviceEventEmitter.addListener("event.scored", (eventData) => {
    setCurrentScore(currentScore + 1);
    // setff(ff+1);
    console.log("Score:", currentScore);
  });
  return (
    <scoreContext.Provider value={[currentScore,setCurrentScore]}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='StartScreen'>
          <Stack.Screen name='StartScreen'
            options={{ title: 'START',
              headerStyle:{
                backgroundColor: ""
              },
              headerTitleAlign: "center",
              headerTitleStyle:{
                fontSize: 15,
                fontWeight: "bold",
                color: "black"
              }
           }}
            component={StartScreen}  />
                  <Stack.Screen
            name="GameScreen"
            component={GameScreen}
          />
      
                  <Stack.Screen
            name="AdminScreen"
            component={AdminScreen}
          />
                          <Stack.Screen
            name="ScoreUploadScreen"
            component={ScoreUploadScreen}
          />
          {/* options={{ title: "Home | MobileAnt App", headerBackVisible: false }} */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </scoreContext.Provider>
  );

  
}
AppRegistry.registerComponent("uwu", () => Main);
