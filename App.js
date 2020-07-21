import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HeaderComponent from './Components/HeaderComponent';
import TodoItemComponent from './Components/TodoItemComponent';
import AddTodoComponent from './Components/AddTodoComponent';
import SandboxComponent from './Components/SandboxComponent';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [{ text: 'Understood', onPress: () => console.log('alert closed') }]);
    }
  };

  return (
    // <SandboxComponent />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.content}>
          <AddTodoComponent submitHandler={submitHandler} />
          <View style={styles.list}>
            {todos.length > 0 ? (
              <FlatList data={todos} renderItem={({ item }) => <TodoItemComponent item={item} pressHandler={pressHandler} />} />
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
