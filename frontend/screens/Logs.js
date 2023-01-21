import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Article from '../components/Article';
import Header from '../components/Header';

function Logs(props) {
  // this is a boolean for now but will change to empty object once backend is done
  const [viewAlert, setViewAlert] = useState(false);

  function handleViewAlert() {
    setViewAlert(true)
  }

  return (
    <View>
      <View style={styles.top}>
        <Header text="past alerts" />
        <Button buttonText="alert group"/>
        <Button buttonText="create new group"/>
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