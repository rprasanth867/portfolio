## Setup (Expo) initialization

```bash
npx create-expo-app@latest
```

```bash
npx create-expo-app@latest --template default@sdk-54
```

* Install `Expo Go` from playstore for android
* Make sure Expo Go version and sdk version should be same. Otherwise,
  * Install Expo Go of sdk's version (or)
  * Upgrade SDK's version to match with Expo Go



## Expo Doctor
Expo Doctor is a command-line tool that checks your Expo project for package version mismatches, configuration errors, and dependency compatibility issues

```
npx expo-doctor
```

### Issues I faced

```js
// Issue1: Private method transform
Solution: 
Added these into `babel.config.js`
plugins: [
  "@babel/plugin-transform-private-methods",
  "@babel/plugin-transform-private-property-in-object",
  "@babel/plugin-transform-class-properties",
],



// Issue2: DOMException
Solution: 
Added these code in index.js file. Make sure DOMException should be handled before any code is executed.

// index.js
import 'react-native-get-random-values';

if (typeof globalThis.DOMException === 'undefined') {
  globalThis.DOMException = class DOMException extends Error {
    constructor(message, name) {
      super(message);
      this.name = name || 'Error';
    }
  };
}

import 'expo-router/entry';

```

---

### Other expo commands:
- expo export --platform web
- expo start