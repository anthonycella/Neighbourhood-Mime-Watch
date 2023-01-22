import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';
import Button from '../components/Button';
import Article from '../components/Article';
import Header from '../components/Header';
import colours from '../config/colours';

function Logs() {
  const [viewAlert, setViewAlert] = useState('');
  const [allAlerts, setAllAlerts] = useState([]);

  function getAlerts() {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/reports/',
      params: {
        groupId: 5,
      },
    })
      .then((data) => {
        setAllAlerts(data.data);
      });
  }

  useEffect(() => {
    getAlerts();
  }, []);

  function handleViewAlert(log) {
    setViewAlert(log);
  }

  function handleBack() {
    setViewAlert('');
  }

  function handleStatusChange() {
    let status = "";
    if (viewAlert.report_status === "resolved") {
      status = "reported";
    } else {
      status = "resolved"
    }
    axios({
      method: 'PUT',
      url: 'http://localhost:8000/reports/',
      data: {
        reportStatus: status,
        reportId: viewAlert.id,
      },
    })
      .then(() => getAlerts());
    setViewAlert('');
  }

  // const sampleLogs = [
  //   {
  //     id: 1,
  //     content: 'Hey guys- just saw someone trying to open door knobs throughout the 4th floor. Keep and eye out and be safe.',
  //     user_reporting: 'bongosincorporated',
  //     date_created: '12/12/2022',
  //     last_updated: '01/18/2023',
  //     report_status: 'resolved',
  //     group: 'Mount Pleasant Building',
  //   },
  //   {
  //     id: 2,
  //     content: 'There\'s a weird creepy guy dressed in black spandex and a cape',
  //     user_reporting: 'theRizzler',
  //     date_created: '12/12/2022',
  //     last_updated: '01/18/2023',
  //     report_status: 'resolved',
  //     group: '4th Street Plaza',
  //   },
  //   {
  //     id: 3,
  //     content: 'There\'s a mime blocking the road. I accidentally ran over it.',
  //     user_reporting: 'mauricemozzzzie',
  //     date_created: '12/12/2022',
  //     last_updated: '01/18/2023',
  //     report_status: 'ongoing',
  //     group: 'Mount Pleasant Building',
  //   },
  //   {
  //     id: 4,
  //     content: 'Fire out of control at Moss\'s house, just got his email.',
  //     user_reporting: 'b1ackb3ard',
  //     date_created: '12/12/2022',
  //     last_updated: '01/18/2023',
  //     report_status: 'ongoing',
  //     group: 'Mount Pleasant Building',
  //   },
  //   {
  //     id: 5,
  //     content: 'HELLO..... I SAW SOME SUSSCPICIOUS ACTIVITY BY THE BACK ENTRACNCE T',
  //     user_reporting: 'meemaw',
  //     date_created: '12/12/2022',
  //     last_updated: '01/18/2023',
  //     report_status: 'resolved',
  //     group: '4th Street Plaza',
  //   },
  // ];

  const logList = allAlerts.map((log) => (
    <Article
      key={log.id}
      log={log}
      onPress={() => handleViewAlert(log)}
    />
  ));

  return (
    <ScrollView>
      {!viewAlert ? 
      <>
        <Header text='past alerts' />
        <ScrollView>
          {logList}
          {/* <Article
            location='mp'
            date='12/12/2022'
            body='hahaha'
            neighbourName='johnny b'
            onPress={handleViewAlert}
          /> */}
        </ScrollView>
      </>
      :
      <>
        <Button
          buttonText='back to alerts'
          colour={colours.green}
          onPress={handleBack}
        />
        <Article
          log={viewAlert}
        />
        <Button
          buttonText='mark resolved'
          colour={colours.green}
          onPress={handleStatusChange}
        />
        <Button
          buttonText='mark ongoing'
          colour={colours.yellow}
          onPress={handleStatusChange}
        />
      </>}
    </ScrollView>
  );
}

export default Logs;

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
