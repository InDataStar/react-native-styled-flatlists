# 🌀 react-native-styled-FlatLists

A simple, animated React Native `FlatList` wrapper that applies a **"pulse-in" scale animation** to each item as it renders. Great for enhancing UI with subtle entrance animations in feed-style lists.

---

## ✨ Features

- 📱 Easy to use with any `FlatList`
- 🎞 Smooth "pulse" animation on mount
- ⏱ Configurable per-item animation delay
- 🔧 Works with custom renderers and any data

---

## 📦 Installation

```bash
npm install pulse-in-list
# or
yarn add pulse-in-list
```

## 🚀 Usage

```
import React from 'react';
import { Text, View } from 'react-native';
import PulseInList from 'pulse-in-list';

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
      renderItem={({ item }) => (
        <View style={{ padding: 20, backgroundColor: '#eee', marginVertical: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

```

## ⚙️ Props

| Prop            | Type       | Default | Description                                       |
|-----------------|------------|---------|---------------------------------------------------|
| `data`          | `any[]`    | _None_  | Array of items to render                          |
| `renderItem`    | `function` | _None_  | Function to render each item (same as FlatList)   |
| `animationDelay`| `number`   | `100`   | Delay in ms between animations per item           |


## 🛠 Under the Hood
Each item in the list is wrapped in an Animated.View with a scale transformation. On mount, the component applies a spring animation to bring each item from 0.8 scale to 1.

## 📄 License
MIT