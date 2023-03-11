import React from 'react';
import {
  View,
  Button,
  NativeBaseProvider,
  Text,
  Input,
  extendTheme,
  useColorModeValue,
  Box,
  Checkbox,
  Flex,
  ScrollView
} from 'native-base';
import intolerances from '../intolerances';
import ListItem from './components/ListItem';


const WelcomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Text fontSize="4xl" p="4" textAlign="center" bgColor={'black'}>
          Enter your username below
        </Text>
        <Input
          placeholder="Enter username"
          p="3"
          size="2xl"
          color={'gray.500'}
          bgColor={'gray.100'}
          width="75%"
          textAlign="center"
          mx="auto"
          mb="4"
        />

        <Button
          width="65%"
          mx="auto"
          rounded="lg"
          bgColor="#64748B"
          size="lg"
          shadow="md"
          onPress={() => navigation.navigate('Main')}>
          Enter app
        </Button>
        <Text
          alignSelf="center"
          fontSize="3xl"
          marginTop="25px"
          marginBottom="10px">
          Select allergies or intolerances
        </Text>
        <Box
          alignSelf="center"
          width="90%"
          bgColor="gray.300"
          rounded="lg"
          p="4">
          
          {intolerances.map( intolerance => (
            <ListItem
              text={intolerance.text}
              value={intolerance.value} />
          )

          )}

        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;
