import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput2 from '../components/TextInput2';
import colours from '../config/colours';

export default function GroupsMemberInvite(props) {
  function handleInvite() {

  }

  return (
    <View style={styles.container}>
      <Header text='Mount Pleasant Building' />
      <TextInput2 placeholder="phone number" />
      <Button
        onPress={handleInvite}
        buttonText='invite new member'
        colour={colours.green}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});