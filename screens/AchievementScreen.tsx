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
          marginBottom="10px"
          rounded="lg">
            {achievements.map(achievement => (
              <ListAchievement
                id={achievement.id}
                name={achievement.name}
                progress={achievement.progress}
                completed={achievement.completed}
              />
            ))}
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default AchievementScreen;
