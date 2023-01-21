import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native-web';
import TextInput2 from '../components/TextInput2';
import Button from '../components/Button';
import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage'

function NewAlert(props) {
  const [group, setGroup] = useState("");
  const [activity, setActivity] = useState("");
  const [alertSent, setAlertSent] = useState(false);
  const [error, setError] = useState("")

  function handleAlertGroup() {
    setError("");
    console.log("start function")

    if (!group) {
      return setError("please choose a group")
    }
    if (!activity) {
      return setError("cannot alert empty message")
    }

    console.log("end of function")
    setAlertSent(true);
  }

  function handleBack() {
    
  }

  return (
    <View>
      {!alertSent ?
      <>
        <Header text="create new alert"/>
        <TextInput2
          placeholder="group"
          value={group}
          onChangeText={setGroup}
        />
        <TextInput2
          height={300}
          multiline={true}
          placeholder="what's the activity?"
          value={activity}
          onChangeText={setActivity}
        />
        <Button onPress={handleAlertGroup} buttonText="alert group"/>
        {error && <ErrorMessage text={error}/>}
      </>
      :
      <>
        <Header text={`${group} has been alerted.`}/>
        <Button onPress={handleBack} buttonText="back"/>
      </>}
    </View>
  );
}

export default NewAlert;