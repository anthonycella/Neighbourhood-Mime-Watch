import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Article from '../components/Article';
import Header from '../components/Header';

function Logs(props) {

  return (
    <View>
      <View style={styles.top}>
        <Header text="past alerts" />
        <Button buttonText="Alert group"/>
        <Button buttonText="Create new group"/>
      </View>
      <Article />
    </View>
  );
}

export default Logs;

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
});