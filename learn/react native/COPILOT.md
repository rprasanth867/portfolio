# CopilotKit Integration into React Native App

## 1. Overview
CopilotKit can be integrated into React Native applications to build an AI-powered conversational Copilot that understands user intent and performs UI actions.

It can support:
- Screen navigation
- Applying, updating and removing filters
- Filling and submitting forms
- Opening widgets and bottom sheets
- Saving data
- Downloading and sharing transcripts

## 2. Installation

```bash
npm install @copilotkit/react-native zod
npm install react-native-get-random-values
```

Additional native dependencies may be required for the prebuilt chat UI.

## 3. Provider Configuration

Wrap the application with `CopilotKitProvider`.

```tsx
import { CopilotKitProvider } from
  "@copilotkit/react-native";

<CopilotKitProvider runtimeUrl={RUNTIME_URL}>
  <App />
</CopilotKitProvider>
```

Use a backend runtime endpoint. Never expose LLM API keys in the mobile application.

## 4. Polyfills

Configure the required polyfills in `index.js`.

```tsx
import "react-native-get-random-values";
import "@copilotkit/react-native/polyfills";
```

## 5. Frontend Tool Integration

Use `useFrontendTool` to expose React Native actions to the AI agent.

```tsx
import { useFrontendTool } from
  "@copilotkit/react-native/headless";

import { z } from "zod";

useFrontendTool({
  name: "navigate_to_screen",
  description: "Navigate to an application screen",

  parameters: z.object({
    screenName: z.string(),
  }),

  handler: async ({ screenName }) => {
    // Execute React Native navigation
    return `Navigated to ${screenName}`;
  },
});
```

Other tools can be registered for:
- Filter management
- Form interactions
- Saving records
- Opening widgets
- Downloading transcripts

## 6. Chat Interface

Use CopilotKit's headless APIs:
- `useAgent` – Access agent state and messages.
- `useCopilotKit` – Interact with the CopilotKit runtime.
- `useFrontendTool` – Register frontend actions.
- `useAgentContext` – Provide application and screen context.

Build the chat interface using React Native components or a supported prebuilt UI.

## 7. Architecture

```text
React Native Application
        |
        v
CopilotKit Provider
        |
        v
CopilotKit Runtime
        |
        v
LLM Provider
        |
        v
Intent Recognition & Tool Selection
        |
        v
Frontend Tool Handlers
        |
        v
React Native UI Actions
```

## 8. Web and Mobile Code Reusability

| Component | Reusability |
|---|---|
| LLM provider configuration | Shared |
| AI instructions/prompts | Shared |
| Agent configuration | Shared |
| Tool descriptions and schemas | Mostly shared |
| Web UI handlers | Web-specific |
| Mobile UI handlers | React Native-specific |
| Navigation handlers | Platform-specific |
| Screen context | Platform-specific |

## 9. Important Considerations

- Use a shared AI backend for web and mobile.
- Maintain separate UI action handlers for each platform.
- Register screen context and available actions with the agent.
- Use Redux, Zustand or Context API for shared application state.
- Implement confirmation for sensitive actions.
- Keep API credentials secure on the backend.
- Test tool execution and error handling on both Android and iOS.

## 10. Recommended Architecture

Create a shared TypeScript package containing:
- Tool definitions
- Zod schemas
- AI instructions
- Tool descriptions

Maintain separate implementations for web and React Native to execute platform-specific actions.

**Result:** A unified AI Copilot experience across web and mobile applications, with shared AI logic and platform-specific UI interactions.