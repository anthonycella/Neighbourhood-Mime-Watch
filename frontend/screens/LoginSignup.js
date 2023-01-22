import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import TextInput2 from '../components/TextInput2';
import Header from '../components/Header';
import colours from '../config/colours';

function LoginSignup(props) {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  function handleLogIn() {
    if (!logIn) {
      setSignUp(false);
      return setLogIn(true);
    }

    // user authentication
    // page navigation
    setLogIn(false);
    console.log("log in clicked");
  }

  function handleSignUp() {
    if (!signUp) {
      setLogIn(false);
      return setSignUp(true);
    }

    // axios post
    // page navigation
    setSignUp(false);
    console.log("sign up clicked");
  }

  return (
    <View style={styles.center}>
      <Header text="neighbourhood grime watch" />
      {logIn ?
        <>
          <TextInput2 placeholder="email" />
          <TextInput2 placeholder="password" />
        </> : null}
      {signUp ?
      <>
        <TextInput2 placeholder="email"/>
        <TextInput2 placeholder="password"/>
        <TextInput2 placeholder="name"/>
        <TextInput2 placeholder="phone number"/>
      </> : null}
      <Button
        onPress={handleLogIn}
        buttonText="log in"
        colour={colours.green}
      />
      <Button
        onPress={handleSignUp}
        buttonText="sign up"
        colour={colours.green}
      />
    </View>
  );
}

export default LoginSignup;

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    alignItems: 'center',
  },
});