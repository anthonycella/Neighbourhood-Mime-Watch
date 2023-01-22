import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginSignup from './screens/LoginSignup';
import Article from './components/Article';
import SmallButton from './components/SmallButton';
import Navbar from './components/Navbar';
import Logs from './screens/Logs';
import NewAlert from './screens/NewAlert';
import GroupsMain from './screens/GroupsMain';
import GroupsSpecific from './screens/GroupsSpecific';
import GroupsMemberInvite from './screens/GroupsMemberInvite';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

// const tabBarBgColor = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'orange'
//   },
// };

export default function App() {
  return (
    // <NavigationContainer theme={tabBarBgColor}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 },
          tabBarActiveBackgroundColor:'#A3BD7C',
          tabBarInactiveBackgroundColor:'#9BB574',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Logs}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-outline" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Alerts"
          component={NewAlert}
          options={{
            tabBarLabel: 'Alerts',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bulb-outline" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Groups"
          component={GroupsMemberInvite}
          options={{
            tabBarLabel: 'Groups',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" color={color} size={35} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <Logs /> */}
    //   {/* <LoginSignup /> */}
    //   {/* <SmallButton buttonText='edit name'/>
    //   <SmallButton buttonText='delete group'/> */}
    //   {/* <GroupsMain /> */}
    //   {/* <GroupsSpecific /> */}
    //   {/* <GroupsMemberInvite /> */}
    //   {/* <Logs />
    //   <LoginSignup />
    //   <SmallButton buttonText='edit name' />
    //   <SmallButton buttonText='delete group' /> */}
    //   {/* <Navbar /> */}
    //   <NavigationContainer>
    //     <Tabs />
    //   </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 40,
  },
});
