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
      <Button onPress={() => navigation.navigate("groupsMemberInvite")} title="go to groupsMemberInvite" />
      <Button onPress={() => navigation.navigate("red")} title="go to red" />
      <Button onPress={() => navigation.navigate("groupsSpecific")} title="go to groupsSpecific" />
    </View>
  );
};

export default ScreenRed;