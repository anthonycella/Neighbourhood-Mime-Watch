import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput2 from '../components/TextInput2';

export default function GroupsMemberInvite() {
  function handleInvite() {

  }

  return (
    <View style={styles.container}>
      <Header text='Mount Pleasant Building' />
      <TextInput2 placeholder="phone number" />
      <Button onPress={handleInvite} buttonText='Invite new member' />
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