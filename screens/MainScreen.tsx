import React from 'react';
import { View, NativeBaseProvider, Text, Box } from 'native-base';
import RecipeCard from './components/RecipeCard';

const MainScreen = ({navigation}: {navigation : any}) => {
  return (
    <NativeBaseProvider>
        <Box flex={1} alignItems="center" bg="#ecfeff">
            <Text fontSize="4xl">
                Recommended Recipe
            </Text>
            <RecipeCard />    

        </Box>
        
    
    </NativeBaseProvider>
  )
}

export default MainScreen;