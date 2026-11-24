## Glossary

## **React Native – Threads & Communication Terminology**
       
 
**Old architecture**
 
| Keyword | What it means |
|---|---|
| Bridge | The old message channel between JS and native. Async only, and everything had to go through JSON. |
| Paper | The name of the old renderer, the part that turned React output into native views. |
| Native module | Native (Swift/ObjC/Kotlin/Java) code exposing device features like camera or storage to JS. Old ones were loaded at app start. |
| JavaScriptCore (JSC) | The JS engine from Safari, originally used by React Native. |
 
**New architecture**
 
| Keyword | What it means |
|---|---|
| JSI (JavaScript Interface) | A C++ layer that lets JS call native code directly, like calling a normal function. There is no JSON, and calls can be sync or async. |
| C++ | A fast, low-level language shared by iOS and Android, so core logic is written once. |
| Host object | A C++ object that JS can hold and call methods on directly through JSI. |
| Fabric | The new renderer. It keeps the UI tree in shared C++ and supports React's newer features. |
| Shadow tree / shadow node | A copy of the UI tree, kept on the native side, with layout information. Each node is one view. |
| Immutable | Cannot be changed after creation. A new version is made instead, which lets threads share the tree safely. |
| Render phase | React builds a new shadow tree. |
| Commit phase | Layout is calculated and the new tree is marked as ready. |
| Mount phase | The changes are applied to the real views on screen. |
| TurboModules | The new native modules. They load only when first used (lazy) and are called through JSI. |
| Lazy loading | Loading something only when it is needed, instead of at startup. |
| Codegen | A tool that reads your typed module definitions and generates the connecting code automatically. |
| Spec | A TypeScript or Flow file describing a native module's functions and types, which Codegen reads. |
| Bridgeless mode | The final stage, where the Bridge is removed completely and everything uses JSI. |
| Interop layer | Compatibility code that lets old-style modules and components run on the new architecture. |
| Concurrent rendering | React can prepare UI updates in the background and pause or prioritize them. |
| Suspense / startTransition | React features that use concurrent rendering, for showing loading states and marking updates as low priority. |
| useLayoutEffect | A React hook that runs right after layout, before the screen paints. It is useful for measuring views. |
 
**Engines and build tools**
 
| Keyword | What it means |
|---|---|
| JS engine | The program that actually executes JavaScript. |
| Hermes | Meta's JS engine built for mobile. It starts fast, uses little memory, and is now the default. |
| Bytecode | Pre-compiled, compact instructions the engine runs directly, skipping parsing at startup. |
| AOT (ahead-of-time) compilation | Compiling at build time rather than when the app runs. |
| Metro | React Native's bundler and development server. |
| Bundle | All your JS files combined into one file the app loads. |
| Babel | A tool that converts modern JS, JSX and TypeScript into JS the engine understands. |
| Fast Refresh | Seeing code changes instantly in the running app during development. |
| Xcode / Gradle | The native build tools for iOS and Android. |
 
**Native and UI side**
 
| Keyword | What it means |
|---|---|
| Host view / native view | A real platform UI element: UIView on iOS, android.view.View on Android. |
| UIKit | Apple's native UI framework. |
| Yoga | A C++ engine that calculates Flexbox layout. |
| Flexbox | The layout system (flexDirection, justifyContent and so on) used for styling. |
| Native driver | Running animations directly on the UI thread, without involving JS each frame. |
| Reanimated / worklet | A popular animation library. A worklet is a small JS function that runs on the UI thread via JSI. |
| Expo | A framework and toolset built on React Native that simplifies setup, building and native modules. |