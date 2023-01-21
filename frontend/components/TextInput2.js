import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import colours from '../config/colours';

function TextInput2(props) {
  const [text, onChangeText] = useState('');

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      border: 0,
      boxShadow: '1px 1px 1px grey',
      borderRadius: 3,
      width: '100%',
      fontSize: 24,
      height: props.height
    },
  });

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
        placeholderTextColor={colours.lightGrey}
        multiline={props.multiline ? props.multiline : null}
        row={50}
      />
    </SafeAreaView>
  );
};

export default TextInput2;