import React, { useEffect, useState } from 'react';
import { View } from 'react-native-web';
import TextInput2 from '../components/TextInput2';
import Button from '../components/Button';
import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage'
import { SelectList } from 'react-native-dropdown-select-list'
import colours from '../config/colours';

function NewAlert(props) {
  const [group, setGroup] = useState("");
  const [activity, setActivity] = useState("");
  const [alertSent, setAlertSent] = useState(false);
  const [error, setError] = useState("")

  useEffect(() => {
    // axios get?
  }, [])

  const sampleGroups = [
    {key: '1', value: 'Mount Pleasant'},
    {key: '2', value: '4th Street Plaza'},
    {key: '3', value: 'Broken Dreams Boulevard'}
  ]

  function handleAlertGroup() {
    setError("");

    if (!group) {
      return setError("please choose a group");
    }
    if (!activity) {
      return setError("cannot alert empty message");
    }

    // axios get and post?
    // twilio integration
    setAlertSent(true);
  }

  function handleBack() {
    setGroup("");
    setActivity("");
    setAlertSent(false);
  }

  return (
    <View>
      {!alertSent ?
      <>
        <Header text="create new alert"/>
        <SelectList
          setSelected={val => setGroup(val)}
          data={sampleGroups}
          save="value"
          label="group"
          boxStyles={{borderRadius: 0, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: colours.lightGrey,  marginBottom: 10}}
          fontFamily="system-ui"
          inputStyles={{color: colours.black, fontSize: 24}}
        />
        <TextInput2
          height={300}
          multiline={true}
          placeholder="what's the activity?"
          value={activity}
          onChangeText={setActivity}
        />
        <Button
          onPress={handleAlertGroup}
          buttonText="alert group"
          colour={colours.red}
        />
        {error && <ErrorMessage text={error}/>}
      </>
      :
      <>
        <Header text={`${group} has been alerted.`}/>
        <Button
        onPress={handleBack}
        buttonText="create new alert"
        colour={colours.green}
        />
      </>}
    </View>
  );
}

export default NewAlert;