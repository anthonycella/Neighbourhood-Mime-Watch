import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import TextInput2 from '../components/TextInput2';
import Header from '../components/Header';

function LoginSignup(props) {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  function handleLogIn() {
    if (!logIn) {
      setSignUp(false);
      return setLogIn(true);
    }
    setLogIn(false);
    console.log("log in clicked");
  }

  function handleSignUp() {
    if (!signUp) {
      setLogIn(false);
      return setSignUp(true);
    }
    setSignUp(false);
    console.log("sign up clicked");
  }

  return (
    <View>
      <Header text="neighbourhood grime watch"/>
      {logIn &&
      <>
        <TextInput2 placeholder="email"/>
        <TextInput2 placeholder="password"/>
      </>}
      {signUp &&
      <>
        <TextInput2 placeholder="email"/>
        <TextInput2 placeholder="password"/>
        <TextInput2 placeholder="name"/>
        <TextInput2 placeholder="phone number"/>
      </>}
      <Button onPress={handleLogIn} buttonText="log in"/>
      <Button onPress={handleSignUp} buttonText="sign up"/>
    </View>
  );
}

export default LoginSignup;