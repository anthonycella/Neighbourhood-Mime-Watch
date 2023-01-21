import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colours from '../config/colours';

function ErrorMessage(props) {
  return (
    <Text style={styles.container}>{props.text}</Text>
  );
}

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    color: colours.red,
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 20
  }
});