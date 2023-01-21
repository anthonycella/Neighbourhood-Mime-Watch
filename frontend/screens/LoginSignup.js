import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import TextInput2 from '../components/TextInput2';
import Header from '../components/Header';

function LoginSignup(props) {
  return (
    <View>
      <Header text="neighbourhood grime watch"/>
      <TextInput2 placeholder="username"/>
      <TextInput2 placeholder="password"/>
      <Button buttonText="log in"/>
      <Button buttonText="sign up"/>
    </View>
  );
}

export default LoginSignup;