import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput2 from '../components/TextInput2';
import colours from '../config/colours';

export default function GroupsMemberInvite(props) {
  const [inviteSent, setInviteSent] = useState(false);

  function handleInvite() {

  }

  return (
    <View>
      {inviteSent ?
      <View style={styles.sendInvite}>
        <Header text='Mount Pleasant Building' />
        <TextInput2 placeholder="phone number" />
        <Button
          onPress={handleInvite}
          buttonText='invite new member'
          colour={colours.green}
        />
      </View>
      :
      <View style={styles.inviteSent}>
        <Header text='778 430 1822 is now able to receive text alerts for Mount Pleasant Building.' />
        <Button
          onPress={handleBack}
          buttonText='Back to group'
          colour={colours.green}
        />
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  sendInvite: {
    marginTop: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inviteSent: {
    marginTop: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});