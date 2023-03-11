import React from 'react';
import { VStack, Box, Divider, Text, Image} from "native-base";

const RecipeCard = () => {
  return (
    <Box borderRadius="md" bg="#CBD5E1" marginTop="6" p="6">
        <VStack space="4" divider={<Divider />} >
            <Text>
                RecipeName
            </Text>
        </VStack>
    </Box>


  )
}

export default RecipeCard;