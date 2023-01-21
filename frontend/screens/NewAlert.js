import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import TextInput2 from '../components/TextInput2';
import Button from '../components/Button';
import Header from '../components/Header';

function NewAlert(props) {
  return (
    <View>
      <Header text="create new alert"/>
      <TextInput2 placeholder="group"/>
      <TextInput2 height={300} multiline={true} placeholder="what's the activity?"/>
      <Button buttonText="alert group"/>
    </View>
  );
}

export default NewAlert;

// const styles = StyleSheet.create({
//   textBody: {
//     height: 100
//   }
// });