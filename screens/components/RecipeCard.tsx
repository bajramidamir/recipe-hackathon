import React from 'react';
import { VStack, Box, Divider, Text } from "native-base";

const RecipeCard = () => {
  return (
    <Box borderRadius="md" bg="#CBD5E1" marginTop="12" p="6">
        <VStack space="4" divider={<Divider />} >
            <Box>
                NativeBase
            </Box>
        </VStack>
    </Box>


  )
}

export default RecipeCard;