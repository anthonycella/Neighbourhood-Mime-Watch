import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput2 from '../components/TextInput2';
import colours from '../config/colours';
import ErrorMessage from '../components/ErrorMessage';

export default function GroupsMemberInvite() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inviteSent, setInviteSent] = useState(false);
  const [error, setError] = useState('');

  function handleInvite() {
    if (!phoneNumber) {
      return setError('please enter a phone number');
    }
    axios({
      method: 'POST',
      url: 'http://localhost:8000/groups/',
      data: {
        phoneNumber,
        groupId: 5,
      },
    });
    // twilio integration
    return setInviteSent(true);
  }

  function handleBack() {
    setPhoneNumber('');
    setInviteSent(false);
  }

  return (
    <View>
      {!inviteSent ?
      <View style={styles.sendInvite}>
        <Header text='Mount Pleasant Building' />
        <TextInput2
          placeholder="phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Button
          onPress={handleInvite}
          buttonText='invite new member'
          colour={colours.green}
        />
        <ErrorMessage text={error}/>
      </View>
      :
      <View style={styles.inviteSent}>
        <Header text={`${phoneNumber} is now able to receive text alerts for Mount Pleasant Building.`} />
        <Button
          onPress={handleBack}
          buttonText='invite another member'
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
  },
});
