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
    Badge,
    Popover,
  } from 'native-base';
  import { Image } from 'native-base';
import ListAchievement from './components/ListAchievement';
import achievements from '../achievements';


const AchScreen = () => {
    
  return (
    <NativeBaseProvider>
        <View>
        <Box
          width='80%' 
          justifyContent='center'
          alignSelf="center"
          fontSize="2xl"
          marginTop="25px"
          marginBottom="10px"
          rounded="lg">
        <Text 
        color='white'
        
        alignSelf='center'>
          {achievements.map(achievement =>(
                <ListAchievement 
                id={achievement.id}
                name={achievement.name}
                progress={achievement.progress}
                completed={achievement.completed}
                 />
            )
            )}
        </Text>
        </Box>
        <Badge>
            <Image source={{uri:'https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_960_720.png'}}/>
        </Badge>
        </View>
    </NativeBaseProvider>
  )
}

export default AchScreen