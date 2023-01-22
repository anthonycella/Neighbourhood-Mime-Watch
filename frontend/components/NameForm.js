import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput2 from './TextInput2';
import SmallButton from './SmallButton';
import colours from '../config/colours';

function NameForm(props) {
  return (
    <View>
      <TextInput2
        value={props.groupName}
        onChangeText={props.setGroupName}
        placeholder="name"
      />
      <View style={styles.flex}>
        <SmallButton
          buttonText={props.greenText}
          colour={colours.green}
          onPress={props.greenFunction}
        />
        <SmallButton
          buttonText={props.redText}
          colour={colours.red}
          onPress={props.redFunction}
        />
      </View>
    </View>
  );
}

export default NameForm;

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});