import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SmallButton from '../components/SmallButton';
import colours from '../config/colours';

export default function GroupsMain() {
  
  useEffect(() => {
    // axios get?
  })

  function handleAlert() {

  }

  function handleCreate() {

  }

  return (
    <View style={styles.container}>
      <Button
        onPress={handleAlert}
        buttonText='alert group'
        colour={colours.red}
      />
      <Button
        onPress={handleCreate}
        buttonText='create new group'
        colour={colours.green}
      />
      <Header text='Mount Pleasant Building' />
      <View style={styles.flex}>
        <SmallButton
          buttonText='edit name'
          colour={colours.green}
        />
        <SmallButton
          buttonText='delete group'
          colour={colours.red}
        />
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