import React from 'react';
import { View, NativeBaseProvider, Text } from 'native-base';

const MainScreen = ({navigation}: {navigation : any}) => {
  return (
    <NativeBaseProvider>
    <View>
        <Text>
        Goodbye World
        </Text>
        
    </View>
    
    </NativeBaseProvider>
  )
}

export default MainScreen;