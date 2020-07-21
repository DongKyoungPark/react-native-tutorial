import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AddTodoComponent = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder='New Todo...' onChangeText={changeHandler} />
      <Button onPress={() => submitHandler(text)} title='Add todo' color='coral' />
    </View>
  );
};

export default AddTodoComponent;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
