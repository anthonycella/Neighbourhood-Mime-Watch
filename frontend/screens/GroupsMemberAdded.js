import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput2 from '../components/TextInput2';
import colours from '../config/colours';

export default function GroupsMemberAdded() {
  function handleBack() {

  }

  return (
    <View style={styles.container}>
      <Header text='778 430 1822 is now able to receive text alerts for Mount Pleasant Building.' />
      <Button
        onPress={handleBack}
        buttonText='Back to group'
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