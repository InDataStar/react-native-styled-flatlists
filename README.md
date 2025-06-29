# 🌀 react-native-styled-FlatLists

A simple, animated React Native `FlatList` wrapper library offering plug-and-play animation effects for your lists. Includes two components:

- **PulseInList**: A "pulse-in" (scale) animation.
- **SlideInList**: A directional slide-in animation (`left`, `right`, `up`, `down`).

Perfect for feed-style UI, dashboards, or onboarding content.

---

## ✨ Features

- 📱 Easy to use with any `FlatList`
- 🎞 Smooth entrance animations: pulse or slide
- ⏱ Configurable per-item animation delay
- 🔃 Supports horizontal and vertical lists
- 🔧 Works with custom renderers and any data

---

## 📦 Installation

```bash
npm install react-native-styled-flatlists
# or
yarn add react-native-styled-flatlists
```


## 🚀 Usage


### PulseInList
```
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
      renderItem={({ item }) => (
        <View style={{ padding: 20, backgroundColor: '#eee', marginVertical: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
```

### SlideInList 
```
import React from 'react';
import { Text, View } from 'react-native';
import { SlideInList } from 'react-native-styled-flatlists';

const data = [
  { id: '1', label: 'One' },
  { id: '2', label: 'Two' },
  { id: '3', label: 'Three' },
];

export default function App() {
  return (
    <SlideInList
      data={data}
      direction="left" // 'left' | 'right' | 'up' | 'down'
      animationDelay={150}
      renderItem={({ item }) => (
        <View style={{ padding: 20, backgroundColor: '#ddd', margin: 5 }}>
          <Text>{item.label}</Text>
        </View>
      )}
    />
  );
}

```



## ⚙️ Props 

| Prop            | Type       | Default | Description                                                       |
|-----------------|------------|---------|-------------------------------------------------------------------|
| `data`          | `any[]`    | None    | Array of items to render                                          |
| `renderItem`    | `function` | None    | Function to render each item (same as FlatList)                   |
| `animationDelay`| `number`   | `100`   | Delay in ms between animations per item                           |
| `isHorizontal`  | `boolean`  | None    | Sets the list to either horizontal (`true`) or vertical (`false`) |
| `animationType` | `boolean`  | None    | If `true`, uses spring animation; if `false`, uses timing         |

### Shared Props
| Prop            | Type       | Default | Description                                           |
|-----------------|------------|---------|-------------------------------------------------------|
| `data`          | `any[]`    | None    | Array of items to render                              |
| `renderItem`    | `function` | None    | Function to render each item (same as FlatList)       |
| `animationDelay`| `number`   | 100     | Delay in ms between animations per item               |

🔸 SlideInList Only
| Prop        | Type                                        | Default | Description                         |
|-------------|---------------------------------------------|---------|-------------------------------------|
| `direction` | `'left'` \| `'right'` \| `'up'` \| `'down'` | None    | Direction from which items slide in |

## 🛠 Under the Hood
✅ PulseInList
Each item is wrapped in an Animated.View with a scale transform. On mount, it animates from 0.8 to 1 using a spring animation.

✅ SlideInList
Each item is wrapped in an Animated.View that translates from the specified direction (translateX or translateY). Animations are staggered using animationDelay.

## 📄 License
MIT