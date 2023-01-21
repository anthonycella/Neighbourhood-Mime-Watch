import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colours from '../config/colours';

function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9BB574',
    borderRadius: 30,
    height: 67,
    width: 360,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colours.black
  },
});

export default Button;