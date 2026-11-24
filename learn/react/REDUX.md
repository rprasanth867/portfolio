# Redux vs React Redux vs Redux Toolkit

While they all belong to the same ecosystem, Redux, React Redux, and Redux Toolkit (RTK) serve distinct roles in state management. Redux is the core library, React Redux is the bridge to the React UI, and Redux Toolkit is the modern standard that simplifies using both.


### 1. Redux (The "Core") 

Redux is a standalone JavaScript library used for managing application state.  
It can be used with React, Angular, Vue, or even vanilla JavaScript.

Redux follows a **unidirectional data flow**, meaning data moves in one specific circle through your application. This makes state changes predictable and easier to debug.

>> **It operates on three main principles:**
> * a single source of truth (the Store)
> * state that is read-only
> * changes are made only through pure functions (Reducers). 

### 2. React Redux (The "Bridge") 
React Redux is the official binding library that allows React components to interact with a Redux store.

Without it, you would have to manually subscribe your components to the store and manage performance optimizations yourself. 

> * **Key Features:** Provides hooks like  (to read data) and  (to send actions).
> * **Role:** It ensures that your React components re-render efficiently only when the specific piece of state they care about changes
> * **Uses RectContext:** Internally, Redux uses the React context API that allows it to pass the store along your component tree.

### 3. Redux Toolkit (The "Modern Way") 
Redux Toolkit is the officially recommended approach for writing Redux logic today.  
It wraps the Redux core to solve common pain points like configuration complexity and boilerplate.
Don't need to install `redux` library. It internally uses `redux` library.


> * **Simplification:** Replaces manual store setup with  and combines actions/reducers into "Slices" using . 
> * **Built-ins:** Includes standard tools out-of-the-box, such as Redux Thunk for async logic and Immer for writing "mutative" code that stays immutable under the hood. 

> SOPE properties
> * Simple
> * Opionated
> * Powerful
> * Effective

# Why Redux Toolkit is preferred over Redux ?

> Refer this link  
> https://www.geeksforgeeks.org/reactjs/why-redux-toolkit-is-preferred-over-redux/


# How redux works

> Source: https://www.geeksforgeeks.org/reactjs/how-react-redux-works/

Redux works by maintaining a single state tree. When an action is dispatched, Redux processes the action and updates the state accordingly. This process ensures that the state is predictable and manageable.

### Redux Data Flow :

* **Initial State:** The application starts with an initial state. This initial state represents the default state of your application before any actions have been dispatched.
* **Actions/Dispatches:** Actions are payloads of information that send data from the application to the Redux store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed and can also include additional data.
* **Reducers:** Reducers are pure functions that specify how the application's state changes in response to actions. They take the current state and an action as arguments and return a new state. Reducers determine the next state of the app based on the action type and payload.
* **Store:** The Redux store holds the entire state of the application. It is created using the 'createStore' function and is responsible for managing the state, allowing access to the state via 'getState()', and enabling state updates via 'dispatch(action)'. The store also handles the subscription of listeners through 'subscribe(listener)'.  
* **Subscribe:** Components subscribe to the store to get updates when the state changes. This subscription mechanism allows React components to automatically re-render when the part of the state they depend on changes. In a React-Redux application, the connect function or hooks like 'useSelector' and 'useDispatch' handle this subscription.
* **Dispatch:** When an action is dispatched, it is sent to the Redux store. The store forwards the action to the appropriate reducer, which processes the action and returns a new state. The store then updates its state and notifies all subscribed components of the change, making them re-render with the new state.

### Approach to Integrate Redux with React

* **Using 'connect' API:** The traditional method using 'connect' from 'react-redux' to connect React components to the Redux store.
* **Using Hooks:** The modern approach uses React hooks like 'useSelector' and 'useDispatch' to interact with the Redux store.


### How store is organised

*  The Redux createStore (or configureStore in Toolkit) is essentially a closure. It keeps a private variable for the state and provides methods to interact with it.
  * The Dispatch Mechanism
    * When you call store.dispatch(action), Redux does something very straightforward:
    * It calls your root reducer function.
    * It passes the current state and the action you just dispatched as arguments.
    * It overwrites the old state variable with the return value of that reducer.
  * State Immutability
    * Redux doesn't "change" the state. Instead of modifying the existing object, the reducer returns a brand-new object.
    * Why? This allows for lightning-fast "shallow equality" checks. To see if the state changed, Redux just checks oldState === newState. If the reference is different, it knows the data has changed without having to crawl through every nested property.

```javascript
// Sample createStore method

function createStore(reducer) {
  // This is the private variable (the closure state)
  let state;
  let listeners = [];

  // Method to see the state
  function getState() {
    return state;
  }

  // Method to change the state
  function dispatch(action) {
    state = reducer(state, action); // Update the private variable
    listeners.forEach(l => l());    // Tell everyone it changed
  }

  // Method to listen for changes
  function subscribe(listener) {
    listeners.push(listener);
  }

  // Initialize the state
  dispatch({ type: '@@INIT' });

  // Return the methods, but NOT the 'state' variable itself
  return { getState, dispatch, subscribe };
}
```

> **☠️ Pitfall**  
> Can redux state be updated without using dispatcher method ?  
> `store.getState().someProperty = newValue;`
>> Technically yes in plain Redux (but meaningless), and effectively no in Redux Toolkit.  
>> JavaScript allows it (objects are mutable by default)  
>> Redux Toolkit adds protections using Immer.
>>> State is frozen  
>>> This will likely throw: Cannot assign to read only property  

> **💡 Insight**  
> How does Immer make state read-only?
> * Freezes the final state (optionally, in dev). Uses `Object.freeze(state)`
> * Wraps state in a Proxy while you “mutate” it
> * Tracks changes and produces a new immutable object
>
> ```javascript
> // inside reducer → allowed
> state.value = 10;
>
> // outside (after state is finalized) → error in dev
> store.getState().value = 10;
> ```


### How redux only updates subscribed components

#### 1. The Subscription Registry
The Store also maintains an internal array of listeners (callback functions).

Every time you use a hook like `useSelector` or the legacy `connect`, you are essentially adding a function to that listeners array.

After the reducer finishes updating the state, the store loops through every listener and executes it.

This triggers the UI (like React) to re-render with the fresh data.


#### 2. The Selector "Gatekeeper"
You might think: "If every listener runs on every dispatch, doesn't that mean every component re-renders?"

**No**. This is where the `useSelector` hook (from the React-Redux library) does its heavy lifting. Here is the internal logic:

**The Trigger:** The store notifies the hook that something changed.

**The Re-run:** The hook runs your selector function (e.g., `state => state.user.name`) against the new state.

The Comparison: It compares the new result with the previous result from the last time it ran.

**The Decision:**
* If `newResult === lastResult`, the hook does nothing. It "bails out" of the render.
* If `newResult !== lastResult`, the hook calls a local React state update (like `forceUpdate`) to trigger a re-render for that component only.


#### 3. Shallow Equality: The Secret Sauce

Redux relies on Strict Equality (`===`) for these checks. This is why immutability is so important.

Imagine your state looks like this:

```JavaScript
state = {
  user: { name: "Alice", age: 25 },
  posts: [1, 2, 3]
}
```

If you update the `user.age` to `26` correctly (by returning a new object), the user reference changes, but the posts reference stays the same.

Component A (`useSelector(state => state.posts)`): Sees that the `posts` array is the exact same memory reference. No re-render.

Component B (`useSelector(state => state.user)`): Sees that the `user` object is a new reference. Re-renders.


```javascript
// Sample useSelector method

import { useContext, useReducer, useEffect, useRef } from 'react';
import { ReactReduxContext } from './context'; // React-Redux uses Context to pass the store

function useSelector(selector) {
  // 1. Get the store from Context
  const { store } = useContext(ReactReduxContext);
  
  // 2. A "force update" mechanism to trigger re-renders
  const [, forceUpdate] = useReducer((s) => s + 1, 0);

  // 3. Keep track of the "last known value" to compare it later
  const lastSelectedState = useRef();

  // 4. Get the current value from the store
  const selectedState = selector(store.getState());

  // 5. The "Magic" Listener
  useEffect(() => {
    const checkForUpdates = () => {
      const newSelectedState = selector(store.getState());

      // SHALLOW EQUALITY CHECK:
      // If the reference hasn't changed, do nothing!
      if (newSelectedState === lastSelectedState.current) {
        return;
      }

      // If it DID change, update our ref and force a re-render
      lastSelectedState.current = newSelectedState;
      forceUpdate();
    };

    // Subscribe to the store on mount
    const unsubscribe = store.subscribe(checkForUpdates);

    // Clean up on unmount
    return unsubscribe;
  }, [store, selector]);

  // Update the ref after a render so the next check is accurate
  lastSelectedState.current = selectedState;

  return selectedState;
}
```

### Middlewares

Middlewares are the most complex part of the "hood." They sit between the Dispatch and the Reducer.

When you dispatch an action, it actually travels through a chain of functions. This is how tools like Redux Thunk or Redux Logger work. They intercept the action, can delay it, log it, or even stop it entirely before it ever hits the reducer.

Mathematically, a middleware chain looks like a series of composed functions: