import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Display from './components/Display';

export default function App() {
  console.warn('Hello');
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>ToDo App with React Native</Text>
        <Display todos={['blabla', 'something']} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    alignSelf: 'center',
  },
});
