import React from 'react';
import {NativeBaseProvider, VStack, Text, Image} from 'native-base';

const RecipeScreen = () => {
  return (
    <NativeBaseProvider>
      <VStack bg="CBD5E1">
        <Text>Recipe Name</Text>
        <Image
          source={{
            uri: 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1280,c_limit/0817-murray-mancini-dried-tomato-pie.jpg',
          }}
          width="full"
          alt="Food"
          size="2xl"
        />
      </VStack>
    </NativeBaseProvider>
  );
};

export default RecipeScreen;
