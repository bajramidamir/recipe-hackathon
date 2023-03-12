import React from 'react';
import { VStack, Box, Divider, Text, Image} from "native-base";

const RecipeCard = () => {
  return (
    <Box borderRadius="lg" bg="#CBD5E1" marginTop="6" p="6">
        <VStack space="4" divider={<Divider />} >
            <Text fontSize="2xl" textAlign="center">
                RecipeName
            </Text>
            <Image source={{uri:"https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1280,c_limit/0817-murray-mancini-dried-tomato-pie.jpg"}} width="full" alt="Food" size="2xl" />
        </VStack>
    </Box>


  )
}

export default RecipeCard;