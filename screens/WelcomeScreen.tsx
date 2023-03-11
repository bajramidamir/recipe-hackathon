import React from 'react';
import { View, Button, NativeBaseProvider, Text } from 'native-base';

// import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 

// type ProfileStackNavScreen = StackNavigationProp<
// RootStackParamList,
// 'Home',
// 'Welcome'

const WelcomeScreen = ({navigation} : {navigation : any}) => {
  return (
    <NativeBaseProvider>
    <View>
      <Text>
      Hello World
      </Text>
        
        <Button onPress={() => navigation.navigate('Main')}>
          Bjezi
        </Button>
    </View>
    </NativeBaseProvider>
  )
}

export default WelcomeScreen;