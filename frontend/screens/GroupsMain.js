import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-web';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SmallButton from '../components/SmallButton';
import colours from '../config/colours';
import Confirm from '../components/Confirm';
import NameForm from '../components/NameForm';

export default function GroupsMain() {
  const [allGroups, setAllGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [createGroup, setCreateGroup] = useState(false);
  const [editGroupName, setEditGroupName] = useState('');
  const [deleteGroup, setDeleteGroup] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/groups/',
      params: {
        phoneNumber: '(919) 410-1939',
      },
    })
      .then((data) => {
        console.log('data: ', data.data);
        setAllGroups(data.data);
      })
      .catch((err) => {
        console.log('error: ', err.message);
      })
  }, []);

  function handleCreateGroup() {
    if (!groupName) {
      return setError("please enter a name");
    }
    setGroupName('');
    setError('');
    axios({
      method: 'POST',
      url: 'http://localhost:8000/groups/',
      data: {
        groupName,
        dateCreated: new Date(),
      },
    });
    return setCreateGroup(false);
  }

  function handleEditGroupName(group) {
    if (!editGroupName) {
      setEditGroupName(group);
      return setGroupName(group);
    }
    if (!groupName) {
      return setError("please enter a name");
    }
    setError('');
    // axios put
    setGroupName('');
    setEditGroupName(false);
  }

  function handleDelete(group) {
    if (!deleteGroup) {
      setDeleteGroup(true);
      return setGroupName(group);
    }
    setGroupName('');
    setDeleteGroup(false);
  }

  function handleCancel() {
    setGroupName("");
    setError("");
    setCreateGroup(false);
    setDeleteGroup(false);
    setEditGroupName("");
    setGroupName("");
  }

  const groupList = allGroups.map(group => {
    return (
      <View key={group.group_id}>
        <Header text={group.group_name} />
        {editGroupName === group.group_name ?
        <>
          <NameForm
            groupName={groupName}
            setGroupName={setGroupName}
            greenText="save"
            redText="cancel"
            greenFunction={handleEditGroupName}
            redFunction={handleCancel}
          />
        </> : null}

        {(editGroupName !== group.group_name && groupName !== group.group_name) ?
        <View style={styles.flex}>
          <SmallButton
            buttonText='edit name'
            colour={colours.green}
            onPress={() => handleEditGroupName(group.group_name)}
          />
          <SmallButton
            buttonText='delete group'
            colour={colours.red}
            onPress={() => handleDelete(group.group_name)}
          />
        </View> : null}

        {(deleteGroup && groupName === group.group_name) ?
        <Confirm
          onBack={handleCancel}
          onDelete={handleDelete}
        /> : null}
      </View>
    )
  })

  return (
    <ScrollView>
      <View>
        <Header text='your groups' />
        {!createGroup ? 
        <Button
          onPress={() => setCreateGroup(true)}
          buttonText='create new group'
          colour={colours.green}
        />
        :
        <>
          <NameForm
            groupName={groupName}
            setGroupName={setGroupName}
            greenText="create"
            redText="cancel"
            greenFunction={handleCreateGroup}
            redFunction={handleCancel}
          />
        </>}
      </View>
      {groupList}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});