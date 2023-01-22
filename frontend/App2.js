import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Routes, Link } from "react-router-native";
import ScreenGreen from "./screens/ScreenGreen";
import ScreenRed from "./screens/ScreenRed";

export default function App2() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link
            to="/about"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>About</Text>
          </Link>
          <Link
            to="/topics"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Topics</Text>
          </Link>
        </View>

        <Routes>
          <Route exact path="/red" element={<ScreenRed/>} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

AppRegistry.registerComponent("MyApp", () => App);