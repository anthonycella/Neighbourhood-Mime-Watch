import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colours from '../config/colours';

function SmallButton(props) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{props.buttonText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9BB574',
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
    color: colours.black
  },
});

export default SmallButton;