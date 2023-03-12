import React from 'react';
import { VStack, Box, Divider, Text, Image, ScrollView, HStack} from "native-base";
import { Pressable } from 'react-native';

const RecipeCard = () => {
  return (

    <ScrollView>
      <Box borderRadius="lg" bg="#CBD5E1" marginTop="6" p="6">
        <VStack space="4" divider={<Divider />} >
          <Text fontSize="2xl" textAlign="center">
              RecipeName
          </Text>
          <Image source={{uri:"https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1280,c_limit/0817-murray-mancini-dried-tomato-pie.jpg"}} width="full" alt="Food" size="2xl" />
          <HStack justifyContent={'space-between'}>
            <Text>Prep Time: 8 min</Text>
            <Text>Difficulty: Medium</Text>
          </HStack>
        </VStack>
      </Box>
    <Text fontSize="2xl" textAlign="center">Instructions</Text>
      <Box borderRadius="lg" bg="#CBD5E1" marginTop="6" p="6">
        <VStack space="4" divider={<Divider />} >
            <Text fontSize="2xl" textAlign="center">
              Step 1
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate autem ipsa vitae molestias temporibus dicta deserunt nam earum dignissimos? Similique architecto fuga odit reprehenderit eveniet ad sint harum hic consequatur!
            </Text>
            <Text fontSize="2xl" textAlign="center">
              Step2
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint ipsa dolorum deserunt, veritatis, rem repellendus eligendi eveniet similique alias impedit maxime voluptates, temporibus velit! Odit cumque nemo excepturi optio?
            </Text>
        </VStack>
      </Box>
    </ScrollView>
  )
}

export default RecipeCard;