import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colours from '../config/colours';
import SmallButton from './SmallButton';

function Confirm(props) {
  return (
    <View>
      <Text style={styles.text}>are you sure?</Text>
      <View style={styles.flex}>
        <SmallButton
          buttonText="nevermind"
          colour={colours.green}
          onPress={props.onBack}
        />
        <SmallButton
          buttonText="delete"
          colour={colours.red}
          onPress={props.onDelete}
        />
      </View>
    </View>
  );
}

export default Confirm;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});