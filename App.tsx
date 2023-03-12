import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/MainScreen';
import AchScreen from './screens/AchScreen';


// type rootStackParamList = {
//   Home: undefined,
//   Profile: {name : string}
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hello username :)" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Achievements" component={AchScreen} options={{headerTitleAlign: 'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;