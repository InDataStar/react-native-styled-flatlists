import React from 'react';
import { Text, View } from 'react-native';
import PulseInList from 'react-native-styled-flatlists';

const data = [
  { key: '1', name: 'Apple' },
  { key: '2', name: 'Banana' },
  { key: '3', name: 'Cherry' },
];

export default function App() {
  return (
    <PulseInList
      data={data}
      animationDelay={120}
      isHorizontal={true}
      animationType='timing'
      renderItem={({ item }) => (
        <View style={{ padding: 20, backgroundColor: '#eee', marginVertical: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
    )
  }