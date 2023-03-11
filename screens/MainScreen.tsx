import React from 'react';
import { NativeBaseProvider, Text, VStack , Center } from 'native-base';
import RecipeCard from './components/RecipeCard';
import CardNav from './components/CardNav';

const MainScreen = ({navigation}: {navigation : any}) => {
  return (
    <NativeBaseProvider>
        <Center>
            <VStack space={3} alignContent="center" p={4}>
                <Text fontSize="4xl">
                    Recommended Recipe
                </Text>
                <RecipeCard />
                <CardNav />
            </VStack>
        </Center>
    
    </NativeBaseProvider>
  )
}

export default MainScreen;