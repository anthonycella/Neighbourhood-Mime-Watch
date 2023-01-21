import { StyleSheet, View } from 'react-native';
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

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NewAlert /> */}
      {/* <Logs /> */}
      {/* <LoginSignup /> */}
      {/* <SmallButton buttonText='edit name'/>
      <SmallButton buttonText='delete group'/> */}
      {/* <GroupsMain /> */}
      <GroupsSpecific />
      {/* <GroupsMemberInvite /> */}
      {/* <GroupsMemberAdded /> */}
      {/* <Logs />
      <LoginSignup />
      <SmallButton buttonText='edit name' />
      <SmallButton buttonText='delete group' /> */}
      {/* <Navbar /> */}
    </View>
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