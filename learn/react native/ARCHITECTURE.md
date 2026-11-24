


### Main Thread (UI Thread)
Handles native UI operations, view updates, touch events, and drawing/rendering UI components.


### JS Thread
The JavaScript thread executes JavaScript code, including business logic, React components, state updates, and event handling.


### Shadow Thread (Old architecture)
The Shadow thread calculates the layout of UI components using the Yoga layout engine and determines their positions and dimensions before they are rendered on the native UI.


### Native thread
2. Native Thread
Native Thread is a broader, less precise term. It can refer to threads executing native platform code (Java/Kotlin on Android or Objective-C/Swift on iOS).


### Yoga
Yoga is a cross-platform layout engine used by React Native to calculate the position and dimensions of UI components based on Flexbox rules before rendering them on the native screen.

The difference is how it integrates with the rendering architecture:
- Old Architecture: Yoga calculates layouts for the Shadow Tree, traditionally using the Shadow Thread.
- New Architecture: Yoga calculates layouts for the C++ Shadow Tree, with layout calculations performed on background threads as part of the rendering pipeline.



### JSI
JavaScript Interface (JSI) is a lightweight, general-purpose C++ layer that replaces the legacy asynchronous bridge in React Native's New Architecture. It allows JavaScript to hold direct memory references to C++ objects (HostObjects) and invoke native methods directly without serialization overhead



### Turbo Modules
![alt text](../assets/rn-turbo-modules.png)


### Fabric
Fabric is React Native's new rendering system in the New Architecture that manages the creation, updating, and rendering of native UI components using a shared C++ Shadow Tree and JSI for efficient JavaScript-to-native communication.



### **Key differences**

| Feature  | JSI                                | Fabric             | TurboModules                |
| -------- | ---------------------------------- | ------------------ | --------------------------- |
| Type     | Communication interface            | Rendering system   | Native module system        |
| Purpose  | JS-to-native communication         | UI rendering       | Access native functionality |
| Uses JSI | It is JSI                          | Yes                | Yes                         |
| Replaces | Old Bridge communication mechanism | Legacy UI Manager  | Legacy Native Modules       |
| Example  | Accessing native C++ functions     | Rendering a button | Accessing device camera     |



### Codegen
Codegen (Code Generation) in React Native is a tool in the New Architecture that automatically generates type-safe native code (C++ and platform-specific interfaces) from JavaScript or TypeScript specifications, enabling communication between JavaScript and native modules/components.


