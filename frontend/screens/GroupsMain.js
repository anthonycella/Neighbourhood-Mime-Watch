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
  const [editGroupName, setEditGroupName] = useState(false);
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

  function handleCancelCreateGroup() {
    setGroupName("");
    setError("");
    setCreateGroup(false);
  }

  function handleEditGroupName() {
    if (!groupName) {
      return setError("please enter a name");
    }
    setError("");
    // axios put
    setGroupName("");
    setEditGroupName(false);
  }

  function handleDelete() {
    // axios delete
    setDeleteGroup(false);
  }

  return (
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
          redFunction={handleCancelCreateGroup}
        />
      </>}

      <Header text='Mount Pleasant Building' />

      {editGroupName ?
      <>
        <NameForm
          groupName={groupName}
          setGroupName={setGroupName}
          greenText="save"
          redText="cancel"
          greenFunction={handleEditGroupName}
          redFunction={() => setEditGroupName(false)}
        />
      </> : null}

      {(!deleteGroup && !editGroupName) ?
      <View style={styles.flex}>
        <SmallButton
          buttonText='edit name'
          colour={colours.green}
          onPress={() => setEditGroupName(true)}
        />
        <SmallButton
          buttonText='delete group'
          colour={colours.red}
          onPress={() => setDeleteGroup(true)}
        />
      </View> : null}

      {deleteGroup ?
      <Confirm
        onBack={() => setDeleteGroup(false)}
        onDelete={handleDelete}
      /> : null}
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