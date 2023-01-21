import { StyleSheet, View } from 'react-native';
import LoginSignup from './screens/LoginSignup';
import Article from './components/Article';
import SmallButton from './components/SmallButton';
import Navbar from './components/Navbar';
import Logs from './screens/Logs';
import NewAlert from './screens/NewAlert';

export default function App() {
  return (
    <View style={styles.container}>
      <NewAlert />
      {/* <Logs /> */}
      {/* <LoginSignup /> */}
      {/* <SmallButton buttonText='edit name'/>
      <SmallButton buttonText='delete group'/> */}
      {/* <Navbar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello king</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });