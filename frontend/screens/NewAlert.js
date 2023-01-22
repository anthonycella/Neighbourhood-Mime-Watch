import React, { useEffect, useState } from 'react';
import { View } from 'react-native-web';
import axios from 'axios';
import TextInput2 from '../components/TextInput2';
import Button from '../components/Button';
import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage';
import { SelectList } from 'react-native-dropdown-select-list';
import colours from '../config/colours';

import { sendAlertToGroup } from '../../server/twilio/twilio';

function NewAlert(props) {
  const [group, setGroup] = useState("");
  const [activity, setActivity] = useState("");
  const [alertSent, setAlertSent] = useState(false);
  const [error, setError] = useState("");

  const placeholderPhoneNumber = '(912) 059-9119';
  const placeholderId = 5;

  axios({
    method: 'get',
    url: 'http://localhost:8000/groups/',
    params: {
      phoneNumber: placeholderPhoneNumber,
    },
  })
    .then((results) => {
      console.log(results);
    });

  const sampleGroups = [
    {key: 1, value: 'Mount Pleasant Building'},
    {key: 2, value: '4th Street Plaza'},
    {key: 3, value: 'Broken Dreams Boulevard'},
  ];

  function handleAlertGroup(groupNumber) {
    setError("");

    if (!group) {
      return setError("please choose a group");
    }
    if (!activity) {
      return setError("cannot alert empty message");
    }

    // axios get and post?
    // twilio integration
    const phoneNumbersToText = ['+19198255137'];
    // const placeholderMessage = 'Hello. My name is Inigo Montoya. You kill my father. Prepare to die.';

    const data = {
      phoneNumbers: phoneNumbersToText,
      alert: activity,
    };

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    const url = 'http://localhost:8000/twilio';

    axios.post(url, data, config)
      .then((result) => console.log('text success!'))
      .catch((error) => console.log(error));

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/twilio',
    //   data: {
    //     phoneNumbers: phoneNumbersToText,
    //     alert: placeholderMessage,
    //   },
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // });

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
          placeholder="group"
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
        {error ? <ErrorMessage text={error}/> : null}
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