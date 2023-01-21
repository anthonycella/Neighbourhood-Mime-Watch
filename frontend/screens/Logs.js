import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Article from '../components/Article';
import Header from '../components/Header';
import colours from '../config/colours';

function Logs(props) {
  // this is a boolean for now but will change to empty object once backend is done
  const [viewAlert, setViewAlert] = useState(false);

  function handleViewAlert() {
    setViewAlert(true);
  }

  function handleBack() {
    setViewAlert(false);
  }

  return (
    <View>
      {!viewAlert ? 
      <>
        <Header text="past alerts" />
        <View>
          <Article
            location="mp"
            date="12/12/2022"
            body="hahaha"
            neighbourName="johnny b"
            onPress={handleViewAlert}
          />
        </View>
      </>
      :
      <>
        <Button
          buttonText="back to alerts"
          colour={colours.green}
          onPress={handleBack}
        />
        <Article />
        <Button
          buttonText="mark resolved"
          colour={colours.green}
          onPress={handleBack}
        />
        <Button
          buttonText="mark ongoing"
          colour={colours.yellow}
          onPress={handleBack}
        />
      </>}
    </View>
  );
}

export default Logs;