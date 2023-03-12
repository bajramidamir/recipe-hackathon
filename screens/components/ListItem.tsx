import React from 'react';
import {Flex, Text, Checkbox} from 'native-base';

type IntolerancesPropType = {
  text: string;
  value: string;
};

const ListItem = ({text, value}: IntolerancesPropType) => {
  return (
    <Flex direction="row" justifyContent='space-between'>
      <Text px="2" my="1" fontSize="xl">{text}</Text>
      <Checkbox value={value} />
    </Flex>
  );
};

export default ListItem;
