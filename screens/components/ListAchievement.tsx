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
    <Flex direction="row" justifyContent='flex-end'>
    
      <Text px="4" fontSize="xl" bg={completed ? 'green.300' : 'black'} color={completed? 'black':'white'}>{id}. {name} {"\n"} {progress} </Text>
     
    </Flex>
   
  );
};

export default ListAchievement;