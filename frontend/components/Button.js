import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colours from '../config/colours';

function Button(props) {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.colour,
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
      color: colours.darkGrey
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

export default Button;