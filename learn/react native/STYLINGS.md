## Styles


### 1. Inline Styles

Inline styles are applied by passing raw JavaScript objects directly into a component's built-in `style` prop.

*   **How to Use:**
    You define properties as a key-value JavaScript object directly on the component:
    ```javascript
    <View style={{ flex: 1, backgroundColor: 'blue', padding: 16 }}>
      <Text style={{ color: '#fff', fontSize: 18 }}>Hello World</Text>
    </View>
    ```
*   **Optimal Use Cases:**
    *   **Rapid prototyping:** Perfect for quick, throwaway projects or one-off tests where you need to check visual results without setting up style files.
    *   **Highly dynamic styles:** Useful for passing variables that change rapidly (such as calculating coordinates during gestures or handling dynamic conditional toggles in simple elements).
*   **Key Drawbacks:**
    *   **Performance overhead:** React Native re-creates the style object on **every single render cycle**, which can severely impact rendering performance in complex layouts.
    *   **Code duplication:** Fails to support style reusability, violating DRY (Don't Repeat Yourself) principles and creating verbose, bloated markup.
    *   **No Media Queries:** It is highly difficult to handle responsive or device-size changes because traditional media queries are not supported natively.
    *   **CamelCase friction:** Requires manually translating CSS properties to camelCase (e.g. `backgroundColor` instead of `background-color`), meaning you cannot easily copy and paste styles from a web project.

---

### 2. Core `StyleSheet.create()`

This is React Native's built-in, recommended standard API. It abstracts style declarations away from your JSX and validates your styling properties.

*   **How to Use:**
    You declare style objects using the `StyleSheet` utility, usually at the bottom of the component file, and reference their key IDs in the component's `style` prop. Multiple styles can be merged by passing them as an array:
    ```javascript
    import { StyleSheet, Text, View } from 'react-native';

    const App = () => (
      <View style={[styles.container, styles.highlighted]}>
        <Text style={styles.text}>Built-in StyleSheet</Text>
      </View>
    );

    const styles = StyleSheet.create({
      container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
      highlighted: { borderWidth: 1, borderColor: '#007acc' },
      text: { color: '#333', fontSize: 18 }
    });
    ```
*   **Optimal Use Cases:**
    *   **Production standard:** Ideal for standard production-grade apps where you want zero external dependencies and optimal native performance.
    *   **Organised codebases:** Great for teams that prefer structured code with clear boundaries between component markup and style sheets.
*   **Key Drawbacks:**
    *   **No responsive automation:** Lacks automatic responsive scaling out of the box, requiring manual calculations using percentages or the native `Dimensions` API.
    *   **Verbosity & mental mapping:** Creating separate classes for every element increases file size. It also forces developers to constantly perform "mental mappings" between the styles in the sheet and the component in the JSX.
    *   **Isolated files duplication:** It does not naturally share styles across different files unless you manually build, export, and maintain centralized theme files.
    *   **Known Platform Quirks:** Certain styling inconsistencies persist across platforms (for example, negative margins are completely unsupported on Android, and touchable areas cannot extend past parent container bounds).

---

### 3. Utility-First Tailwind CSS (NativeWind)

NativeWind brings Tailwind CSS's web-native utility class workflow to mobile, compiling utility classes at build time directly into optimized `StyleSheet` objects.

*   **How to Use:**
    Styles are defined declaratively as Tailwind classes directly within the `className` prop:
    ```javascript
    <View className="flex-1 bg-gray-100 p-4 justify-center items-center">
      <Text className="text-lg font-bold text-blue-600">Tailwind in React Native</Text>
    </View>
    ```
    *Note: Setting this up requires installing peer dependencies (like `nativewind` and `tailwindcss`) and configuring the project’s Tailwind, Babel, and Metro settings to intercept and transform the classes.*
*   **Optimal Use Cases:**
    *   **Web-to-mobile shared code:** Excellent for teams building universal apps (sharing logic and layouts directly between a React web project and an Expo mobile app).
    *   **Fast UI iteration:** Highly suited for developers who already know Tailwind CSS on the web and want to quickly design complex components without writing extensive style boilerplate.
*   **Key Drawbacks:**
    *   **Initial configuration cost:** Requires custom project bootstrapping, including adding specific presets to your Babel configurations and wrapping Metro bundler configurations.
    *   **Bespoke customizations limit:** For heavily customized design configurations, you still have to invest time configuring Tailwind's central theme file (`tailwind.config.js`).

---

### 4. Styled-Components (CSS-in-JS)

An open-source library that allows you to define React Native components with plain-CSS template literals embedded directly in your code.

*   **How to Use:**
    You import primitive components from `styled-components/native` (instead of directly from React Native) and define styled blocks. Styles can dynamically adapt by accepting interpolated prop functions:
    ```javascript
    import styled from 'styled-components/native';

    const Container = styled.View`
      flex: 1;
      background-color: ${props => props.isDark ? '#121212' : '#ffffff'};
      padding: 16px;
    `;

    const App = () => (
      <Container isDark={true}>
        <Text style={{ color: 'white' }}>Styled Container</Text>
      </Container>
    );
    ```
*   **Optimal Use Cases:**
    *   **Dynamic Design Systems:** Perfect for projects requiring highly semantic, component-driven layouts where style changes are heavily tied to React `props`.
    *   **Web developers transitioning to mobile:** Highly advantageous for developers with a strong web background who are accustomed to writing pure CSS templates.
*   **Key Drawbacks:**
    *   **Runtime processing overhead:** Evaluating string templates and processing prop-based calculations occurs at runtime, which can result in noticeable rendering lag as the scale of your application grows.
    *   **Debugging confusion:** Because styled components create custom semantic names (e.g., `<Container>`), it becomes more challenging to distinguish styled components from actual functional or logical components in React DevTools during debugging sessions.
    *   **Strict unit parser (`px`):** Unlike core React Native stylesheets where numbers are unitless, styled-components relies on `css-to-react-native`, forcing you to always append suffixes like `px` for properties like `font-size` or layout elements.
    *   **File bloat:** Component files can grow excessively large when markup, business logic, and lengthy CSS template blocks are combined in a single file.

---

### 5. CSS Modules

This pipeline enables component-scoped styling using traditional `.css` files rather than writing styles in JavaScript objects.

*   **How to Use:**
    You define standard CSS inside a companion `.module.css` file and import it directly into your React file.
    ```css
    /* App.module.css */
    .container {
      flex-flow: row;
      justify-content: space-evenly;
      background-color: #6804CD;
      height: 30px;
    }
    ```
    ```javascript
    // App.js
    import style from './App.module.css';

    export default function App() {
      return (
        <View style={style.container}>
          <Text>Component scoped CSS!</Text>
        </View>
      );
    }
    ```
    *Note: To run CSS Modules on native platforms, your project must integrate complex third-party tools such as `react-native-css-transformer` and specific Babel plugins.*
*   **Optimal Use Cases:**
    *   **Strict Separation of Concerns:** Highly recommended for organizations that strictly enforce isolating styling templates from JavaScript logic.
    *   **Clean CSS Migration:** Excellent for directly copying/pasting legacy web-based CSS stylesheets into a mobile application without having to perform manual object conversions.
*   **Key Drawbacks:**
    *   **Complex compilation toolchain:** Requires manually creating and configuring `metro.config.js` and configuring Babel plugins to translate CSS modules into valid React Native objects.
    *   **Portability limits:** Because CSS Modules require a heavy platform-specific bundling setup, they are highly dependent on your specific build configuration and cannot be easily transferred to alternative mobile frameworks.

---
