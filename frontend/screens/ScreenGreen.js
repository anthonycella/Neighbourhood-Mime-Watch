import { View, Text, Button } from 'react-native';
import React from 'react';

const ScreenGreen = () => {
  return (
    <View>
      <Text>ScreenGreen</Text>
      <Button onPress={() => navigation.navigate("red")} title="go to red" />
    </View>
  );
};

export default ScreenGreen;