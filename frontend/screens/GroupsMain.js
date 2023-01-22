import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SmallButton from '../components/SmallButton';
import colours from '../config/colours';
import Confirm from '../components/Confirm';
import NameForm from '../components/NameForm';

export default function GroupsMain() {
  const [groupName, setGroupName] = useState("");
  const [createGroup, setCreateGroup] = useState(false);
  const [editGroupName, setEditGroupName] = useState("");
  const [deleteGroup, setDeleteGroup] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    // axios get?
  }, [])

  function handleCreateGroup() {
    if (!groupName) {
      return setError("please enter a name");
    }
    setGroupName("");
    setError("");
    // axios post
    setCreateGroup(false);
  }

  function handleEditGroupName(group) {
    if (!editGroupName) {
      setEditGroupName(group);
      return setGroupName(group);
    }
    if (!groupName) {
      return setError("please enter a name");
    }
    setError("");
    // axios put
    setGroupName("");
    setEditGroupName(false);
  }

  function handleDelete(group) {
    if (!deleteGroup) {
      setDeleteGroup(true);
      return setGroupName(group);
    }
    // axios delete
    setGroupName("");
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

  const sampleGroups = [
    {
      id: 1,
      group: "Mount Pleasant Building" 
    },
    {
      id: 2,
      group: "4th Street Plaza" 
    },
    {
      id: 3,
      group: "Bat Cave Manor" 
    },
  ];

  const groupList = sampleGroups.map(group => {
    return (
      <View key={group.id}>
        <Header text={group.group} />
        {editGroupName === group.group ?
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

        {(editGroupName !== group.group && groupName !== group.group) ?
        <View style={styles.flex}>
          <SmallButton
            buttonText='edit name'
            colour={colours.green}
            onPress={() => handleEditGroupName(group.group)}
          />
          <SmallButton
            buttonText='delete group'
            colour={colours.red}
            onPress={() => handleDelete(group.group)}
          />
        </View> : null}

        {(deleteGroup && groupName === group.group) ?
        <Confirm
          onBack={handleCancel}
          onDelete={handleDelete}
        /> : null}
      </View>
    )
  })

  return (
    <View>
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
    </View>
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