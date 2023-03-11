import React from 'react';
import { View, Button, NativeBaseProvider, Text , Input, extendTheme, useColorModeValue, Box , Checkbox, Flex} from 'native-base';
import { useColorScheme } from 'react-native';


// import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 

// type ProfileStackNavScreen = StackNavigationProp<
// RootStackParamList,
// 'Home',
// 'Welcome'
const colorScheme = extendTheme({
  colors: {
    primary_light: '#007AFF', // Blue in light mode
    primary_dark: '#0A84FF', // Blue in dark mode
    background_light: '#F8F8F8', // Light gray in light mode
    background_dark: '#1C1C1E', // Dark gray in dark mode
    text_light: '#000000', // Black in light mode
    text_dark: '#FFFFFF', // White in dark mode
  },
});
const WelcomeScreen = ({navigation} : {navigation : any}) => {
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  return (
    <NativeBaseProvider>
    <View>
      <Text bgColor={'black'}>
      Enter your username below
      </Text>
      <Input placeholder="Enter username"  p="3"  color={'gray.500'} bgColor={'gray.100'}  />
      
        <Button  bgColor={'gray.800'} onPress={() => navigation.navigate('Main')}>
          Login
        </Button>
        <Text alignSelf='center' fontSize='3xl' marginTop='25px'>Select allergies or intolerances</Text>
        <Box   alignSelf='center' width='90%' bgColor='gray.300' height='70%' p='4'>
          <Flex alignItems = "center" flexDirection="row"  justifyContent="space-between">
          <Text mr='2' fontSize='2xl'>Peanut allergy</Text>
          <Checkbox value='test' marginRight='2' marginTop='20' />
          </Flex>
        </Box>
    </View>
    </NativeBaseProvider>
  )
}

export default WelcomeScreen;