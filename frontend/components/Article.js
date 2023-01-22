import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colours from '../config/colours';

const Separator = () => <View style={styles.separator} />;

function Article(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View>
        <Text style={styles.group}>{props.log.group}</Text>
        <View style={styles.status}>
          <Text style={styles.report_status}>{props.log.report_status} as of {props.log.last_updated}</Text>
          {props.log.report_status === "resolved" ?
          <Ionicons name="checkmark-circle" color={colours.green} size={25}/>
          :
          <Ionicons name="alert-circle" color={colours.yellow} size={25}/>}
        </View>
      </View>
      <View style={styles.marginTop}>
        <Text style={styles.content}>{props.log.content}</Text>
      </View>
      <View>
        <Text style={styles.user_reporting}>{props.log.user_reporting}</Text>
      </View>
      <Separator />
    </TouchableOpacity>
  );
}

export default Article;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    fontSize: 40,
    fontWeight: 'bold',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },
  group: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  report_status: {
    fontSize: 20,
    fontStyle: 'italic',
    marginRight: 5
  },
  marginTop: {
    marginTop: '5%',
  },
  content: {
    fontSize: 20
  },
  alignRight: {
    textAlign: 'right',
  },
  user_reporting: {
    marginTop: '5%',
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});