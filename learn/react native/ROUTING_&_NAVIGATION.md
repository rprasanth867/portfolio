
## Routing

### Slot
- dynamic placeholder that renders the current active child route
- provides navigation animations, headers or tab bars
- renders the current screen as is without wrapping it in any pre-configured native navigator UI
- persistent shared layout (ex: Sibebars, Headers)


## Navigations

In React Native, navigation is usually divided into these main types when using libraries like React Navigation:

### Stack Navigation
- Screens are pushed/popped like a stack.
- LIFO — Last In, First Out
- Example: Login → Home → Profile
- Common for app flows.
- Support static & dynamic navigations

```ts
// Static Navigation
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

const MyStack = createStackNavigator({
  screens: {
    Home: createStackScreen({
      screen: HomeScreen,
    }),
    Profile: createStackScreen({
      screen: ProfileScreen,
    }),
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}



// Dynamic Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
```

### Native Stack Navigation
- Similar to Stack Navigation but uses native navigation primitives for better native performance/behavior.
- The Native Stack navigator uses the native APIs `UINavigationController` on iOS and `Fragment` on Android

#### Stack vs Native Stack

| Feature            | Stack                     | Native Stack                                   |
| ------------------ | ------------------------- | ---------------------------------------------- |
| Package            | `@react-navigation/stack` | `@react-navigation/native-stack`               |
| Implementation     | Primarily JS-based        | Native primitives                              |
| Navigation         | Stack-based               | Stack-based                                    |
| `navigate()`       | ✅                         | ✅                                              |
| `goBack()`         | ✅                         | ✅                                              |
| Route params       | ✅                         | ✅                                              |
| Static routes      | ✅                         | ✅                                              |
| Dynamic parameters | ✅                         | ✅                                              |
| Native transitions | More customizable         | More native                                    |
| Custom animations  | More flexible             | More limited                                   |
| Performance        | Good                      | Generally better for standard stack navigation |
| Native behavior    | Less native               | More native                                    |


### Bottom Tab Navigation
- Tabs appear at the bottom.
- Example: Home | Search | Notifications | Profile

```ts
// Static navigation
import {
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';


const MyTabs = createBottomTabNavigator({
  screens: {
    Home: createBottomTabScreen({
      screen: HomeScreen,
    }),
    Profile: createBottomTabScreen({
      screen: ProfileScreen,
    }),
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}


// Dynamic Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
```

### Native Bottom Tab Navigation
- Native Bottom Tabs provide tab-based navigation using native platform components.

#### Bottom Tabs vs Native Bottom Tabs

| Feature             | Bottom Tabs            | Native Bottom Tabs                         |
| ------------------- | ---------------------- | ------------------------------------------ |
| Implementation      | JS-based               | Native/platform-based                      |
| Native behavior     | Good                   | More native                                |
| Performance         | Good                   | Generally better for native tab operations |
| Customization       | More flexible          | More limited                               |
| Platform appearance | Customizable           | More platform-native                       |
| Animations          | More customizable      | Native behavior                            |
| Use case            | Highly customized tabs | Standard native tab experience             |


### Top Tab Navigation
- Tabs appear at the top.
- Example: Chats | Groups | Calls

### Drawer Navigation
- Side menu that slides from the left/right.
- Example: Home, Profile, Settings, Logout

### Material Top/Bottom Tabs
- React Navigation also provides Material-style tab navigators.

### Expo file-based routing

### Combination of Navigations
- without expo
- with expo

### Nested Navigation

## TODO
- Navigation types and how it works
- multiple ways to add tab navigation
- diff
  - import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";
  - Tabs from 'expo-router'