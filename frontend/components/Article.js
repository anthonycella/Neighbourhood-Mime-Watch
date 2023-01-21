import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

const Separator = () => <View style={styles.separator} />;

function Article(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.articleTitle}>Location</Text>
        <Text style={styles.resolveDate}>resolved on DATE_HERE</Text>
      </View>
      <View style={styles.marginTop}>
        <Text>
          Paragraph describing the incident or something. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fermentum orci.
        </Text>
      </View>
      <View>
        <Text style={styles.neighborName}>Firstname Lastname</Text>
      </View>
      <Separator />
    </View>
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
  neighborName: {
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