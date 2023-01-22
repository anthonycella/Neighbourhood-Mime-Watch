import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ScreenRed = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>ScreenRed</Text>
      <Button onPress={() => navigation.navigate("green")} title="go to green" />
      <Button onPress={() => navigation.navigate("newAlert")} title="go to newAlert" />
    </View>
  );
};

export default ScreenRed;