import React from 'react';
import {Flex, Box, Text, } from 'native-base';

type AchievementsPropType = {
id: number;
name: string;
progress : string;
completed:boolean;
};

const ListAchievement = ({id,name,progress,completed}: AchievementsPropType) => {
  return (
    <Box>
    
      <Text textAlign='center' px="4" fontSize="xl" bg={completed ? 'green.300' : 'black'} color={completed? 'black':'white'}>{id}. {name} {"\n"} {progress} </Text>
     
    </Box>
   
  );
};

export default ListAchievement;