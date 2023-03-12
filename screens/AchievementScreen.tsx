import React from 'react';
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
import ListAchievement from './components/ListAchievement';
import achievements from '../achievements';


const AchievementScreen = () => {
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
        </View>
    </NativeBaseProvider>
  )
}

export default AchievementScreen