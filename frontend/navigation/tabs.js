import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GroupsMain from '../screens/GroupsMain';
import LoginSignup from '../screens/LoginSignup';

const Tab = createBottomTabNavigator();

export default function tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='GroupsMain' component={GroupsMain} />
      <Tab.Screen name='LoginSignup' component={LoginSignup} />
    </Tab.Navigator>
  );
}
