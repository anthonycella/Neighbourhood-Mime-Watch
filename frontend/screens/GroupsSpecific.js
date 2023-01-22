import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SmallButton from '../components/SmallButton';
import Article from '../components/Article';
import colours from '../config/colours';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

export default function GroupsSpecific(props) {

  const navigation = useNavigation();

  useEffect(() => {
    // axios get
  }, []);

  function handleAlert() {

  }

  function handleInvite() {

  }

  const sampleLogs = [
    {
      id: 1,
      content: "Hey guys- just saw someone trying to open door knobs throughout the 4th floor. Keep and eye out and be safe.",
      user_reporting: "bongosincorporated",
      date_created: "12/12/2022",
      last_updated: "01/18/2023",
      report_status: "resolved",
      group: "Mount Pleasant Building"
    },
    {
      id: 3,
      content: "There's a mime blocking the road. I accidentally ran over it.",
      user_reporting: "mauricemozzzzie",
      date_created: "12/12/2022",
      last_updated: "01/18/2023",
      report_status: "ongoing",
      group: "Mount Pleasant Building"
    },
    {
      id: 4,
      content: "Fire out of control at Moss's house, just got his email.",
      user_reporting: "b1ackb3ard",
      date_created: "12/12/2022",
      last_updated: "01/18/2023",
      report_status: "ongoing",
      group: "Mount Pleasant Building"
    }
  ];

  const logList = sampleLogs.map(log => {
    return (
      <Article
        key={log.id}
        log={log}
        onPress={() => handleViewAlert(log)}
      />
    )
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("green")}>
        <Header text='Mount Pleasant Building' />
      </TouchableOpacity>
      <Button
        onPress={handleAlert}
        buttonText='Alert Group'
        colour={colours.red}
      />
      <Button
        onPress={handleInvite}
        buttonText='Invite New Member'
        colour={colours.green}
      />
      <View>
        {logList}
      </View>
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