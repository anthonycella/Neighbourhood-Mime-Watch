import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SmallButton from '../components/SmallButton';
import Article from '../components/Article';

export default function GroupsSpecific(props) {
  function handleAlert() {

  }

  function handleInvite() {

  }

  return (
    <View style={styles.container}>
      <Header text='Mount Pleasant Building' />
      <Button onPress={handleAlert} buttonText='Alert Group' />
      <Button onPress={handleInvite} buttonText='Invite New Member' />
      <Article
        location='London Street'
        date='01/22/2023'
        body="I just met this girl late last year, she said 'Don't you worry if I disappear' and she actually disappeared. Her name was Nina."
        neighborName='Ed Sheeran'
      />
      <Article
        location='Broken Dreams Boulevard'
        date='01/21/2023'
        body="Walking down the only road I've ever known, and some guy was screaming that he's the son of rage and love or something. Stay safe!"
        neighborName='Billie Joe Armstrong'
      />
      <Article
        location='World of Juice'
        date='01/20/2023'
        body="Just saw a man sipping on some Hennessey who said I was his friend and that I'll turn into his enemy if I don't buy him another one."
        neighborName='Jarad Higgins'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});