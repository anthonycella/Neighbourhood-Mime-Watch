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
import GroupsMemberAdded from './screens/GroupsMemberAdded';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="LoginSignupScreen" component={LoginSignup} />
        <Tab.Screen name="GroupsMainScreen" component={GroupsMain} />
      </Tab.Navigator> */}
      <NewAlert />
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <Logs /> */}
    //   {/* <LoginSignup /> */}
    //   {/* <SmallButton buttonText='edit name'/>
    //   <SmallButton buttonText='delete group'/> */}
    //   {/* <GroupsMain /> */}
    //   {/* <GroupsSpecific /> */}
    //   {/* <GroupsMemberInvite /> */}
    //   {/* <GroupsMemberAdded /> */}
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
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // margin: 40,
  },
});
