import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Display = ({ todos }) => {
  return (
    <View style={styles.container}>
      <Text>1. Render with FlatList</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'yellow',
  },
});

export default Display;
