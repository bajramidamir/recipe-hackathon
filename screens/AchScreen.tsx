import React from 'react'
import {
    View,
    Button,
    NativeBaseProvider,
    Text,
    Input,
    extendTheme,
    useColorModeValue,
    Box,
    Checkbox,
    Flex,
  } from 'native-base';
const AchScreen = () => {
  return (
    <NativeBaseProvider>
        <View>
        <Box
          width='60%' 
          height='20%'
          justifyContent='center'
          alignSelf="center"
          fontSize="3xl"
          marginTop="25px"
          marginBottom="10px"
          bg='gray.600'
          rounded="lg">
        <Text 
        color='white'
        
        alignSelf='center'>
          Achievements
        </Text>
        </Box>
        </View>
    </NativeBaseProvider>
  )
}

export default AchScreen