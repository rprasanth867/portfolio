
## React Native
- An open source framework
- Building Android and iOS applications
- Web app also can be built
- Using React and the app platform’s native capabilities
- Same codebase

**Native Code** means code that runs directly on the phone’s operating system rather than JavaScript/TypeScript.

**Native files** are the Android/iOS project files that contain or configure that native code.

> **Live code editor in web**  
> https://snack.expo.dev/


## Android dev
- Kotlin
- Java

## IOS dev
- Swift
- Objective-C


### Native Development
In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components **Native Components**

React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's Core Components.

React Native also lets you build your own Native Components for Android and iOS to suit your app’s unique needs


## Rules
- Every string must inside a `<Text>` component

## Core Components
Core components are built-in components

> Refer this for more information  
>[components-and-apis](https://reactnative.dev/docs/components-and-apis)


### Views
- similar to `<div>` element in HTMl for web development
- a container 
- the basic block of building UI
- a small rectangular element on the screen
- display text, images and other views as well
- At runtime, View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a `UIView`, `<div>`, `android.view`, etc.
- Supports
  - Styling
  - Flexbox
  - touch controls
  - accessibility
- It doesn't support `onPress`. It supports listening touch controls like touch move, end of the touch, etc


### KeyboardAvoidingView
- It ensures the children should be visible when keyboard opens
- It adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed


### TextInput
- allows the user to enter text
- `onChangeText` prop to be called every time when text is changed
- `onSubmitEditing` prop to be called when text is submitted
- Provide features
  - auto-correction, auto-capitalization, placeholder text, different keyboard types, multiline, secureTextEntry


### ScrollView
- Scrolling container
- scrollable items can be heterogeneous (different from each other)
- vertical scroll & horizontal scroll by using `horizontal` prop
- Pagination by using `pagingEnabled` prop
- Works best with limited size
- All elements and views are rendered
- ScrollViews must have a bounded height


### FlatList
- only renders elements that are currently showing on the screen
- works well for long lists of data
- structured data
- `keyExtractor` -- ids for React keys
- Fully cross-platform
- Optional horizontal mode
- Configurable viewability callbacks
- Header, Footer, Separator support
- Pull to Refresh
- Scroll loading
- ScrollToIndex support
- Multiple column support
- requires two props: data and renderItem
- Internal state is not preserved when content scrolls out of the render window


### SectionList
- For rendering sectioned lists
- Fully cross-platform
- Configurable viewability callbacks
- Header, Footer, Separator support
- Section header, separator support
- Heterogeneous data and item rendering support
- Pull to Refresh
- Scroll loading
- Internal state is not preserved when content scrolls out of the render window


### VirtualizedList
- Base implementation of `<FlatList>` and `<SectionList>` components
- need more flexibility than FlatList provides
- e.g. for use with immutable data


### Modal

### ActivityIndicator

### Image

### Alert

### Linking

### Dimensions

### Platform specific code
- Two ways
  - Platform module
  - Plaftorm specific file extension


```javascript
// Platform module
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});

const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
})();

const Component = Platform.select({
  native: () => require('ComponentForNative'),
  default: () => require('ComponentForWeb'),
})();

<Component />;


// Plaftorm specific file extension
// React Native picks the file based on the platform
BigButton.ios.js
BigButton.android.js

import BigButton from './BigButton';

// React Native will automatically pick up the right file based on the running platform.
```

### SafeAreaView
- device area inset information
- position content appropriately around notches, status bars, home indicators, etc
- `SafeAreaView` from `react-native` is deprecated
- import it from `react-native-safe-area-context`
- regular view component with the safe area edges applied as padding


### TouchableOpacity
- A wrapper for view to respond to touches
- dimming the content when pressing down

### Pressable
- Detects various stages of touches
  - `onPress`, `onLongPress`
  - `onPressIn`, `onPressMove`, `onPressOut`
  - `onHoverIn`, `onHoverOut`

### Image
- Displays different types of images
  - Network images
  - Static resources
  - Temporary local images
  - Images from local disk
  - Camera roll

### GIF, WebP Support on Android
- By default, it is not supported on android
- need to add some optional modules in `android/app/build.gradle`

```groovy
dependencies {
  // If your app supports Android versions before Ice Cream Sandwich (API level 14)
  implementation 'com.facebook.fresco:animated-base-support:1.3.0'

  // For animated GIF support
  implementation 'com.facebook.fresco:animated-gif:3.6.0'

  // For WebP support, including animated WebP
  implementation 'com.facebook.fresco:animated-webp:3.6.0'
  implementation 'com.facebook.fresco:webpsupport:3.6.0'

  // For WebP support, without animations
  implementation 'com.facebook.fresco:webpsupport:3.6.0'
}
```

## Image & File picker
```js
// In pure react native app
// Image & video & launch camera
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// Documents
import {pick, types} from '@react-native-documents/picker';
const [file] = await pick({
  type: [types.pdf, types.doc, types.docx],
});




// In expo app
// Image & video
import * as ImagePicker from 'expo-image-picker';
const result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ['images', 'videos'],
  allowsMultipleSelection: false,
});

// Documents
import * as DocumentPicker from 'expo-document-picker';
const result = await DocumentPicker.getDocumentAsync({
  type: '*/*',
});
```

## Permissions
```js
// In pure react native app
// Unified permission manager for all kind of permissions
// It requires, configure the required native permissions
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';



// In expo app
// Expo module exposes permission API for a feature
expo-camera
expo-location
expo-notifications
expo-image-picker
expo-media-library
expo-contacts
import { CameraView, useCameraPermissions } from 'expo-camera';

```

## Notifications

## Status bar
