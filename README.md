# CheckBox UI

This is a customizable CheckBox component for React Native that can be used in any project built with Expo or React Native. It provides several styling options, dynamic color support based on light or dark mode, animation effects, and support for various states (`checked`, `unchecked`, `indeterminate`) with custom icons and colors.

## Features:

- Supports three states: `checked`, `unchecked`, and `indeterminate`.
- Customizable labels and icon styles.
- Dynamic theming (light and dark mode support).
- Animation effects for click feedback.
- Fully customizable styles, including colors, borders, size, and shape.
- Optional error state with customizable error color.
- Supports accessibility with both press and long-press actions.

## Installation

To use this CheckBox component, ensure you have the following dependencies installed:

```bash
npm install react-native
npm install @expo/vector-icons
```

If you're using Expo, the `Ionicons` icon package is included by default. Otherwise, you can install it via:

```bash
npm install @expo/vector-icons
```

Copy the CheckBox component code and the `Colors.ts` file into your project.

Import the `CheckBox` component into your project:

```tsx
import CheckBox from "@/components/CheckBox"; // Adjust path as needed
```

## Usage

Here’s a basic usage example:

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import CheckBox, { CheckBoxStatusProps } from "@/components/CheckBox";

const App = () => {
  const [status, setStatus] = useState<CheckBoxStatusProps>("unchecked");

  const handlePress = (newStatus: CheckBoxStatusProps) => {
    setStatus(newStatus);
  };

  return (
    <View style={{ padding: 20 }}>
      <CheckBox
        status={status}
        onPress={handlePress}
        label="Agree to Terms"
        size={24}
        shape="square"
        checkedColor="green"
        indeterminateColor="orange"
        uncheckedColor="gray"
      />
    </View>
  );
};

export default App;
```

## CheckBox Props

Here’s a detailed list of the props supported by the `CheckBox` component:

| Prop                   | Type                                          | Default Value | Description                                                           |
| ---------------------- | --------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| `status`               | `"checked" \| "unchecked" \| "indeterminate"` | None          | Current state of the CheckBox.                                        |
| `onPress`              | `(status: CheckBoxStatusProps) => void`       | None          | Function called when the CheckBox is pressed.                         |
| `indeterminate`        | `boolean`                                     | `false`       | Enables the `indeterminate` state.                                    |
| `disabled`             | `boolean`                                     | `false`       | If `true`, disables interactions with the CheckBox.                   |
| `label`                | `string`                                      | None          | The label text displayed next to the CheckBox.                        |
| `checkedLabel`         | `string`                                      | None          | Custom label to show when the CheckBox is checked.                    |
| `indeterminateLabel`   | `string`                                      | None          | Custom label to show when the CheckBox is in the indeterminate state. |
| `labelPosition`        | `"left" \| "right"`                           | `"right"`     | Position of the label relative to the CheckBox.                       |
| `checkboxStyle`        | `StyleProp<ViewStyle>`                        | None          | Custom styles for the CheckBox container.                             |
| `labelStyle`           | `StyleProp<TextStyle>`                        | None          | Custom styles for the label text.                                     |
| `checkedColor`         | `string`                                      | Theme color   | Color of the CheckBox when it is checked.                             |
| `indeterminateColor`   | `string`                                      | Theme color   | Color of the CheckBox when it is in the indeterminate state.          |
| `uncheckedColor`       | `string`                                      | Theme color   | Color of the CheckBox when it is unchecked.                           |
| `borderColor`          | `string`                                      | Theme color   | Border color of the CheckBox in `checked` or `indeterminate` state.   |
| `uncheckedBorderColor` | `string`                                      | Theme color   | Border color of the CheckBox when it is unchecked.                    |
| `checkedIcon`          | `keyof Ionicons.glyphMap`                     | `"checkmark"` | Icon to display when the CheckBox is checked.                         |
| `uncheckedIcon`        | `keyof Ionicons.glyphMap`                     | None          | Icon to display when the CheckBox is unchecked.                       |
| `indeterminateIcon`    | `keyof Ionicons.glyphMap`                     | `"remove"`    | Icon to display when the CheckBox is in the indeterminate state.      |
| `size`                 | `number`                                      | `24`          | Size of the CheckBox.                                                 |
| `shape`                | `"circle" \| "square"`                        | `"square"`    | Shape of the CheckBox.                                                |
| `isError`              | `boolean`                                     | `false`       | If `true`, marks the CheckBox with an error state.                    |
| `errorColor`           | `string`                                      | `"#FF5252"`   | Color for the CheckBox border in the error state.                     |

## Example with All Props

```tsx
<CheckBox
  status="checked"
  indeterminate
  onPress={(newStatus) => console.log(newStatus)}
  label="I accept the terms"
  labelPosition="right"
  size={28}
  shape="circle"
  checkedColor="#4CAF50"
  indeterminateColor="#FFC107"
  uncheckedColor="#E0E0E0"
  borderColor="#9E9E9E"
  uncheckedBorderColor="#BDBDBD"
  checkedIcon="checkmark-circle"
  uncheckedIcon="ellipse-outline"
  indeterminateIcon="remove-circle"
  isError={false}
  errorColor="#FF5252"
/>
```

### Notes on Styling

- **Shape**: Use the `shape` prop to choose between `circle` and `square`.
- **Color Theming**: Colors are dynamically chosen based on the device's current theme (`light` or `dark`) via the `useColorScheme` hook.
- **Label Position**: Use `labelPosition` to position the label text to the `left` or `right` of the CheckBox.

### States and Icons

- `checked`: Displays the `checkedIcon` and applies `checkedColor` and `borderColor`.
- `unchecked`: Displays the `uncheckedIcon` and applies `uncheckedColor` and `uncheckedBorderColor`.
- `indeterminate`: Displays the `indeterminateIcon` and applies `indeterminateColor` and `borderColor`.

### Accessibility

Ensure to provide meaningful labels for the CheckBox and handle state updates for a better user experience.

## Contributing

If you'd like to contribute to this CheckBox component, feel free to fork this repository, make changes, and submit a pull request. Any improvements or suggestions are welcome!

## License

This CheckBox component is licensed under the MIT License. See [LICENSE](./LICENSE) for more details.
