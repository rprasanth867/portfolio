## Storages

| Storage / Technology                   | Where data lives                        | RAM / Disk                     | Persistent? | Typical use                    |
| -------------------------------------- | --------------------------------------- | ------------------------------ | ----------- | ------------------------------ |
| **JS Variables**                       | JS runtime memory                       | 🧠 RAM                         | ❌           | Temporary values               |
| **`useState`**                         | React/JS runtime                        | 🧠 RAM                         | ❌           | Component state                |
| **`useReducer`**                       | React/JS runtime                        | 🧠 RAM                         | ❌           | Complex component state        |
| **Context API**                        | React/JS runtime                        | 🧠 RAM                         | ❌           | Shared state                   |
| **Redux**                              | JS runtime                              | 🧠 RAM                         | ❌*          | Global state                   |
| **Zustand**                            | JS runtime                              | 🧠 RAM                         | ❌*          | Global state                   |
| **MobX**                               | JS runtime                              | 🧠 RAM                         | ❌*          | Reactive global state          |
| **Redux Persist**                      | Redux + chosen persistent storage       | 🧠 RAM + 💾 Disk               | ✅           | Persist Redux state            |
| **AsyncStorage**                       | App persistent storage                  | 💾 Disk                        | ✅           | Simple key-value data          |
| **MMKV**                               | Native persistent storage               | 💾 Disk + memory/cache         | ✅           | Fast key-value data            |
| **Expo SecureStore**                   | iOS Keychain / Android secure storage   | 🔐 Secure persistent storage   | ✅           | Tokens, credentials            |
| **iOS Keychain**                       | iOS Keychain                            | 🔐 Secure storage              | ✅           | Passwords, tokens, keys        |
| **Android Keystore**                   | Android Keystore                        | 🔐 Secure storage              | ✅           | Encryption keys, credentials   |
| **Encrypted Storage**                  | Encrypted app storage                   | 🔐 Disk                        | ✅           | Sensitive persistent data      |
| **SQLite**                             | SQLite database file                    | 💾 Disk                        | ✅           | Structured relational data     |
| **Realm**                              | Realm database                          | 💾 Disk + memory mapping/cache | ✅           | Local database / offline-first |
| **WatermelonDB**                       | SQLite-backed database                  | 💾 Disk + RAM                  | ✅           | Large/offline datasets         |
| **RxDB**                               | Local database/storage                  | 💾 Disk                        | ✅           | Offline-first/reactive data    |
| **PouchDB**                            | Local database                          | 💾 Disk                        | ✅           | Offline-first applications     |
| **File System**                        | App's filesystem                        | 💾 Disk                        | ✅           | Images, videos, PDFs, files    |
| **Expo FileSystem**                    | App's filesystem                        | 💾 Disk                        | ✅           | Files/downloads                |
| **Image Cache**                        | Native/app cache                        | 💾 Disk + RAM                  | Usually     | Cached images                  |
| **Network/API Cache**                  | Memory and/or disk depending on library | 🧠 RAM / 💾 Disk               | Depends     | API response caching           |
| **React Query / TanStack Query cache** | JS memory by default                    | 🧠 RAM                         | ❌*          | Server/API state               |
| **Apollo Client cache**                | JS memory by default                    | 🧠 RAM                         | ❌*          | GraphQL response cache         |
| **WebView LocalStorage**               | WebView storage                         | 💾 Disk                        | ✅           | Data belonging to WebView      |
| **WebView IndexedDB**                  | WebView database                        | 💾 Disk                        | ✅           | Structured WebView data        |
| **Cookies**                            | Native/WebView cookie storage           | 💾 Disk                        | ✅           | Session/auth cookies           |


## Async Storage
- key-value data format
- only store string data
- Async read/write operations

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
```

## MMKV Storage
- Fast key-value storage
- 30x fasther than legasy async storage
- synchronous read/write operations
- support encryption
- hooks support

```ts
import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV()

// with config
export const storage = createMMKV({
  id: `user-${userId}-storage`,
  path: `${USER_DIRECTORY}/storage`,
  encryptionKey: 'hunter2',
  encryptionType: 'AES-256',
  mode: 'multi-process',
  readOnly: false,
  compareBeforeSet: false,
})

// set
storage.set('user.name', 'Marc')
storage.set('user.age', 21)
storage.set('is-mmkv-fast-asf', true)

// get
const username = storage.getString('user.name') // 'Marc'
const age = storage.getNumber('user.age') // 21
const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf') // true

// hooks
const [username, setUsername] = useMMKVString('user.name')
const [age, setAge] = useMMKVNumber('user.age')
const [isMmkvFastAsf, setIsMmkvFastAsf] = useMMKVBoolean('is-mmkv-fast-asf')

// checking if a specific key exists
const hasUsername = storage.contains('user.name')

// getting all keys
const keys = storage.getAllKeys() // ['user.name', 'user.age', 'is-mmkv-fast-asf']

// delete a specific key + value
const wasRemoved = storage.remove('user.name')

// delete all keys
storage.clearAll()
```


## SQLite

> Refer (SQLite + Drizzle)  
> https://youtu.be/AT5asDD3u_A?si=qmNdzS4PFU4YTzHq

## WatermelonDB

| Characteristic              | Description                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Local database**          | Stores application data locally on the device.                                                              |
| **SQLite-based**            | React Native uses SQLite underneath, with native/JSI adapters.                                              |
| **Offline-first**           | The application can continue working without an internet connection and synchronize later.                  |
| **Reactive**                | Data can be observed, so UI components can automatically update when database records change.               |
| **Lazy loading**            | It doesn't load the entire database into JavaScript memory. Records are loaded when needed.                 |
| **High performance**        | Queries execute against the database rather than loading all data into JS, which helps with large datasets. |
| **Scalable**                | Designed for applications with hundreds to tens of thousands of records.                                    |
| **Asynchronous**            | Database operations are asynchronous, avoiding unnecessary blocking of the JS/UI layer.                     |
| **Relational**              | Supports tables, relationships, queries, associations, etc.                                                 |
| **Observable queries**      | You can observe individual records, queries, and relationships.                                             |
| **Backend synchronization** | Provides synchronization primitives and a sync protocol, but **you provide your own backend**.              |
| **TypeScript support**      | Supports static typing with TypeScript.                                                                     |
| **React integration**       | Designed to connect database data directly with React components.                                           |
| **Batch operations**        | Supports preparing and executing multiple database operations together.                                     |



## SQLite vs WatermelonDB

| Feature                  | SQLite                       | WatermelonDB                            |
| ------------------------ | ---------------------------- | --------------------------------------- |
| Type                     | Database engine              | Database framework/ORM                  |
| Underlying DB            | SQLite                       | SQLite on native platforms              |
| Data model               | Relational tables            | Models + collections                    |
| Queries                  | SQL                          | WatermelonDB query API                  |
| Performance              | Very good                    | Very good, optimized for large datasets |
| Large datasets           | Good                         | **Excellent**                           |
| Reactive queries         | Manual implementation        | **Built-in**                            |
| Offline-first            | You build the architecture   | **Designed for it**                     |
| Sync                     | You implement                | Sync architecture supported             |
| Relationships            | SQL JOINs / foreign keys     | Model relationships                     |
| Migrations               | You manage                   | Built-in migration system               |
| React Native integration | More low-level               | More RN-oriented                        |
| Learning curve           | SQL required                 | Framework concepts required             |
| Flexibility              | **Very high**                | More opinionated                        |
| Best for                 | Simple/medium local DB needs | Complex offline-first apps              |
