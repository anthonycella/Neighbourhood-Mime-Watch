import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenRed from './screens/ScreenRed';
import ScreenGreen from './screens/ScreenGreen';
import NewAlert from './screens/NewAlert';
import GroupsMain from './screens/GroupsMain';
import GroupsSpecific from './screens/GroupsSpecific';
import GroupsMemberInvite from './screens/GroupsMemberInvite';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="groupsMemberInvite" component={GroupsMemberInvite} />
        <Stack.Screen name="groupsSpecific" component={GroupsSpecific} />
        <Stack.Screen name="groupsMain" component={GroupsMain} />
        <Stack.Screen name="red" component={ScreenRed} />
        <Stack.Screen name="green" component={ScreenGreen} />
        <Stack.Screen name="newAlert" component={NewAlert} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;