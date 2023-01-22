import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colours from '../config/colours';

function SmallButton(props) {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.colour,
      borderRadius: 30,
      height: 40,
      width: 150,
      marginTop: 10,
      marginBottom: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colours.darkGrey
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

export default SmallButton;