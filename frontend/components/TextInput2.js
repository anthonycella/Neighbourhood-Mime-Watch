import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

function TextInput2(props) {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={text}
        placeholder={props.placeholder}
      />
    </SafeAreaView>
  );
};

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
  },
});

export default TextInput2;
