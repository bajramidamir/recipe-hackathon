import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  NativeBaseProvider,
  Text,
  VStack,
  Center,
  Box,
  Button,
  Flex,
  Checkbox,
} from 'native-base';
import RecipeCard from './components/RecipeCard';
import CardNav from './components/CardNav';
import ListItem from './components/ListItem';
import axios from 'axios';
import intolerances from '../intolerances';

const MainScreen = ({navigation}: {navigation: any}) => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeImage, setRecipeImage] = useState('https://media.istockphoto.com/id/1325863625/photo/woman-with-empty-plate-and-cutlery-at-blue-wooden-table-top-view.jpg?b=1&s=170667a&w=0&k=20&c=PZqSjuxvG11rcBHEhdWiKE-jTUZTF42WksW-8sS8fxY=');
  const [recipeInstructions, setRecipeInstructions] = useState('');

  const [details, setDetails] = useState({})

  const generateRecipe = async () => {
    const KEY = '515351f930aa4f8081af328ce9d0d3b5';
    const URL = `https://api.spoonacular.com/recipes/random?apiKey=${KEY}`;
    axios
      .get(URL)
      .then(response => {
        setRecipeName(response.data.recipes[0].title);
        setRecipeImage(response.data.recipes[0].image);
        setRecipeInstructions(response.data.recipes[0].instructions);
        
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Text fontSize="5xl" textAlign="center">Filters</Text>
          <Box
            alignSelf="center"
            width="90%"
            bgColor="gray.300"
            rounded="lg"
            my="4"
            p="4">
            

            {/* mnogo fensi nacin za renderovanje ali ne mogu values uzeti iz ovoga */}
            {intolerances.map(intolerance => (
              <ListItem text={intolerance.text} value={intolerance.value} />
            ))}
          </Box>
          <Button
            rounded="lg"
            mt="4"
            bgColor="#64748B"
            size="lg"
            onPress={generateRecipe}>
            Generate Recipe
          </Button>
          <VStack space={3} alignContent="center" p={2}>
            <RecipeCard
              recipeName={recipeName}
              recipeImage={recipeImage}
              recipeInstructions={recipeInstructions}
            />
            <CardNav />
          </VStack>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default MainScreen;
