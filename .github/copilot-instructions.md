# GitHub Copilot Instructions

## Code Style Guidelines

### React/TSX Conditional Rendering

**Always use separate conditional blocks instead of ternary operators to avoid ESLint indentation conflicts.**

❌ **Don't use ternary in JSX:**
```tsx
{condition ? (
  <Component />
) : (
  <OtherComponent />
)}
```

✅ **Do use separate conditional blocks:**
```tsx
{condition && <Component />}
{!condition && <OtherComponent />}
```

**Reason:** The project uses `@stylistic/eslint-plugin` which has strict indentation rules for ternary expressions that conflict with Prettier's auto-formatting. Using separate conditional blocks avoids this conflict entirely and remains stable after auto-formatting.

### TypeScript

- **Event Handler Naming**:
  - Use `handle[Action]` for component methods that handle events (e.g., `handleClick`, `handleSubmit`, `handleStartOver`)
  - Use `on[Action]` for props/callbacks passed from parent components (e.g., `onClick`, `onSubmit`, `onGoBack`)
  - Avoid `[action]Handler` suffix pattern
- **State Management**: 
  - Use individual `useState` hooks when state values update independently
  - Use a single state object when values are always updated together or are tightly related
  - Always define state type as a separate `State` interface for better visibility and documentation
  - **Always use `satisfies State` when calling `setState` with an object literal** to ensure type safety and catch invalid properties at compile time
  - Example:
    ```tsx
    interface State {
      selectedPage?: LabeledValue;
      results?: AnalysisResults;
    }
    
    const [state, setState] = useState<State>({});
    
    // ✅ Good: satisfies ensures type safety
    setState(prev => ({ ...prev, selectedPage: page } satisfies State));
    
    // ❌ Bad: TypeScript won't catch invalid properties
    setState(prev => ({ ...prev, invalidProp: 'value' }));
    ```
- Prefer explicit typing over inference for component props
- Use proper error handling with `getErrorMessage()` helper

### Atlaskit Components

- Use `Stack` for vertical layouts instead of `Flex direction="column"`
- Use design tokens (`space.100`, `border.radius.100`) instead of hardcoded values
- Add `aria-label` attributes to interactive elements for accessibility
- Use `Lozenge` component for category badges/tags
