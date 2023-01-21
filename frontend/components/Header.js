import React from 'react';
import { Text, StyleSheet } from 'react-native';

function Header(props) {
  return (
    <Text style={styles.container}>{props.text}</Text>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 20
  }
});