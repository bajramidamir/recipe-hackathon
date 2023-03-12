import React from 'react';
import {VStack, Box, Divider, Text, Image} from 'native-base';

type recipePropType = {
  recipeName: string,
  recipeImage: string,
  recipeInstructions: string
}

const RecipeCard = ({ recipeName, recipeImage, recipeInstructions } : recipePropType ) => {
  return (
    <Box borderRadius="lg" bg="#CBD5E1" marginTop="6" p="6">
      <VStack space="4" divider={<Divider />}>
        <Text fontSize="2xl" textAlign="center">
          {recipeName}
        </Text>
        <Image
          source={{
            uri: `${recipeImage}`,
          }}
          alt="Food"
          rounded="xl"
          mx="auto"
          size="2xl"
        />
        <Text fontSize="xl">
          {recipeInstructions}
        </Text>
      </VStack>
    </Box>
  );
};

export default RecipeCard;
