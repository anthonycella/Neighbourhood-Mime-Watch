import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native-web';

const Separator = () => <View style={styles.separator} />;

function Article(props) {
  // add conditional that handles resolve status

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View>
        <Text style={styles.articleTitle}>{props.location}</Text>
        <Text style={styles.resolveDate}>resolved on {props.date}</Text>
      </View>
      <View style={styles.marginTop}>
        <Text>{props.body}</Text>
      </View>
      <View>
        <Text style={styles.neighbourName}>{props.neighbourName}</Text>
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
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  resolveDate: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  marginTop: {
    marginTop: '5%',
  },
  alignRight: {
    textAlign: 'right',
  },
  neighbourName: {
    marginTop: '5%',
    textAlign: 'right',
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});