import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logs from './screens/Logs';
import NewAlert from './screens/NewAlert';
import GroupsMemberInvite from './screens/GroupsMemberInvite';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 },
          tabBarActiveBackgroundColor:'#A3BD7C',
          tabBarInactiveBackgroundColor:'#9BB574',
          tabBarActiveTintColor:'#D66363',
          tabBarInactiveTintColor:'#E2E2E2',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Logs}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Alerts"
          component={NewAlert}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bulb" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Groups"
          component={GroupsMemberInvite}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" color={color} size={35} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
