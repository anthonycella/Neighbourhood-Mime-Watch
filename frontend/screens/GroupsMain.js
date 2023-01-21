import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SmallButton from '../components/SmallButton';

export default function GroupsMain() {
  function handleAlert() {

  }

  function handleCreate() {

  }

  return (
    <View style={styles.container}>
      <Button onPress={handleAlert} buttonText='Alert Group' />
      <Button onPress={handleCreate} buttonText='Create New Group' />
      <Header text='Mount Pleasant Building' />
      <View style={styles.flex}>
        <SmallButton buttonText='edit name' />
        <SmallButton buttonText='delete group' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});