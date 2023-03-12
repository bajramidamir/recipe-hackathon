import React from 'react';
import {NativeBaseProvider, Button, Text, ScrollView} from 'native-base';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Text fontSize="6xl" p="4" mb="10" textAlign="center" bgColor={'black'}>
          Welcome to Daily Menu
        </Text>
        <Button
          width="65%"
          mx="auto"
          rounded="lg"
          bgColor="#64748B"
          size="lg"
          mb="10"
          onPress={() => {
            navigation.navigate('Recipes');
          }}>
          Enter app
        </Button>

        <Button
          width="65%"
          mx="auto"
          my="10px"
          rounded="lg"
          bgColor="#64748B"
          size="lg"
          onPress={() => navigation.navigate('Achievements')}>
          Achievements
        </Button>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;
